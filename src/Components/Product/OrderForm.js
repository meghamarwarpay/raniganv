'use client';
import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import axios from "axios";
import { apiPost } from "@/api/apiMethods";
import Header from "@/Layout/Header";
import { useCart } from "@/context/CartContext"; // Import useCart hook

const OrderForm = () => {
  // const router = useRouter();
  const { buyNowProduct } = useCart(); // Access buyNowProduct from context
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    address: "",
    pincode: "",
    country: "",
    state: "",
    description: buyNowProduct?.description || "",
    productName: buyNowProduct?.productName || "",
    productId: buyNowProduct?._id || "",
    productImages: buyNowProduct?.images?.[0] || "",
    productprice: buyNowProduct?.actualPrice || ""
  });

  const [loading, setLoading] = useState(false);
  const [paymentUrl, setPaymentUrl] = useState("");

  if (!buyNowProduct) {
    // router.push("/"); // Redirect if no product is selected for Buy Now
  }

  // Verify the actualPrice and qty values here
  const totalAmountNum = buyNowProduct ? buyNowProduct.actualPrice * buyNowProduct.qty : 0;
  console.log("Price: ", buyNowProduct?.actualPrice, "Quantity: ", buyNowProduct?.qty, "Total Amount: ", totalAmountNum); // Log to verify calculation

  const txnid = `tgD59N${Date.now()}`;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (!formData.firstName || !formData.lastName || !formData.mobile) {
      alert("Please fill out all required fields.");
      return;
    }

    setLoading(true); // Set loading to true while the request is being made

    // Prepare order data
    const orderData = {
      products: [
        {
          product: buyNowProduct?._id, // Use product ID from buyNowProduct
          quantity: String(buyNowProduct.qty),
          productName: buyNowProduct?.productName,
          price: buyNowProduct.actualPrice, // Ensure correct price is used
          category: buyNowProduct?.category,
          description: buyNowProduct?.description,
          images: buyNowProduct?.images,
        },
      ],
      totalAmount: String(totalAmountNum), // Use totalAmountNum here
      shippingAddress: JSON.stringify({
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        mobile: formData.mobile,
        address: formData.address,
        pincode: formData.pincode,
        country: formData.country,
        state: formData.state,
        productimages: formData.productImages,
        prductid: formData.productId,
        productName: formData.productName,
        description: formData.description,
        price : formData.productprice,
      }),
      paymentMethod: "paypal", // Assuming PayPal for now
    };

    try {
      // Place the order
      const orderResponse = await apiPost("api/order4/orders4", orderData);

      let postReqURl = "https://payment.yunicare.in/payment/ImpactStoreGeneratePayment";
      let postData = {
        trxId: txnid,
        amount: String(totalAmountNum), // Correct totalAmountNum passed here
        redirectUrl: "http://impactstore.in/cart",
      };

      const response = await axios.post(postReqURl, postData);
      const url = response?.data?.data?.data?.payment_url;
      setPaymentUrl(url);
    } catch (err) {
      console.error("Order or payment request failed:", err);
      alert("Error occurred while placing the order.");
      // router.push("/login")
      setLoading(false);
    }
  };

  // Redirect to payment URL when it's set
  useEffect(() => {
    if (paymentUrl) {
      window.open(paymentUrl, "_blank"); // Open the payment URL in a new tab
    }
  }, [paymentUrl]);

  return (
    <>
      <Header />
      <Container className="mt-5">
        <div style={{ marginTop: "15%" }}>
          <h2>Order Form</h2>
          <Row>
            {/* Product Details */}
            <Col md={8}>
              <img
                src={buyNowProduct?.images[0]}
                alt={buyNowProduct?.productName}
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
              <h4>{buyNowProduct?._id}</h4>
              <h4>{buyNowProduct?.productName}</h4>
              <p>{buyNowProduct?.description}</p>
            </Col>

            {/* Order Summary */}
            <Col md={4}>
              <h4 className="text-success">Price: ₹{buyNowProduct?.actualPrice}</h4>
              <h4>Quantity: {buyNowProduct?.qty}</h4>
              <h4>Total: ₹{totalAmountNum}</h4> {/* Ensure the correct total amount is displayed */}
            </Col>
          </Row>
          <Col>
            <h5>Shipping Details</h5>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group controlId="mobile">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.mobile}
                      onChange={(e) =>
                        setFormData({ ...formData, mobile: e.target.value })
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.address}
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={2}>
                  <Form.Group controlId="pincode">
                    <Form.Label>Pincode</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.pincode}
                      onChange={(e) =>
                        setFormData({ ...formData, pincode: e.target.value })
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={2}>
                  <Form.Group controlId="country">
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.country}
                      onChange={(e) =>
                        setFormData({ ...formData, country: e.target.value })
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={2}>
                  <Form.Group controlId="state">
                    <Form.Label>State</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.state}
                      onChange={(e) =>
                        setFormData({ ...formData, state: e.target.value })
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Button
                variant="success"
                type="submit"
                style={{ marginTop: "20px" }}
                disabled={loading}
              >
                {loading ? "Placing Order..." : "Place Order"}
              </Button>
            </Form>
          </Col>
        </div>
      </Container>
    </>
  );
};

export default OrderForm;


