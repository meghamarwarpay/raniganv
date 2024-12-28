'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Container, Row, Col } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import Header from "@/Layout/Header";
import { useCart } from "@/context/CartContext";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const ProductDetail = ({ id }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(""); // Default selected image is empty
  const { addToCart, setBuyNow, addToWishlist } = useCart();
  const router = useRouter();
  // const { id } = router.query;

  useEffect(() => {
    if (!id) return; // Ensure `id` is available

    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `https://ajay.yunicare.in/api/product4/getproduct4/${id}`
        );
        const data = await res.json();
        if (res.ok) {
          setProduct(data.product);
          setSelectedImage(data.product.images[0]); // Set first image as selected by default
        } else {
          setError(data.message || "Error fetching product details");
        }
      } catch (err) {
        setError("Failed to fetch product details");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <Container className="mt-4">
        <p>Loading product details...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-4">
        <p className="text-danger">{error}</p>
      </Container>
    );
  }

  const handleAddToCart = () => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      addToCart(product);
      toast.success("Product added to cart!");
    } else {
      toast.error("Login First");
      router.push("/login");
    }
  };

  const handleBuyNow = () => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setBuyNow(product); // Store product for Buy Now
      router.push("/checkout"); // Redirect to checkout page
    } else {
      toast.error("Login First");
      router.push("/login");
    }
  };

  const handleAddToWishlist = () => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      addToWishlist(product); // Add to wishlist
      toast.success("Product added to wishlist!");
    } else {
      toast.error("Login First");
      router.push("/login");
    }
  };

  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row style={{ marginTop: "13%" }}>
          {/* Left Section */}
          <Col md={6}>
            <img
              src={selectedImage}
              className=" mb-3"
              style={{ width: "70%", }}
            />
            <div className="d-flex gap-2">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  style={{
                    width: "70px",
                    height: "70px",
                    objectFit: "cover",
                    cursor: "pointer",
                    border: selectedImage === img ? "2px solid blue" : "none",
                  }}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
          </Col>

          {/* Right Section */}
          <Col md={6}>
            <h2>{product.productName}</h2>
            <p>{product.description}</p>
            <h4 className="text-success">Price: ₹{product.actualPrice}</h4>
            <p className="text-muted">
              MRP: <span className="text-decoration-line-through">₹{product.price}</span>
            </p>
            <Row>
              <Col>
                <button className="btn btn-primary" onClick={handleAddToCart}>
                  Add to Cart
                </button>
              </Col>
              <Col>
                <button className="btn btn-success" onClick={handleBuyNow}>
                  Buy Now
                </button>
              </Col>
              <Col>
                <button className="btn btn-warning" onClick={handleAddToWishlist}>
                  Add to Wishlist
                </button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
};

export default ProductDetail;
