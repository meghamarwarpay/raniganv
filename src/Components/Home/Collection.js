import React from "react";
import Link from "next/link";
import Image from "next/image";
import img from '../../assets/pinkcityimg/images/Vegetable_Seeds.jpg';
import img1 from '../../assets/pinkcityimg/images/flower_seeds_1.jpg';
import img2 from '../../assets/pinkcityimg/images/HDPE_grow_bag_2.jpg';
import img3 from '../../assets/pinkcityimg/images/Soil_Fertilizer.jpg';
import img4 from '../../assets/pinkcityimg/images/Tools_4.jpg';
import img5 from '../../assets/pinkcityimg/images/Bundles_Products.jpg';

const collections = [
  {
    href: "/allproducts",
    src: img,
    alt: "Vegetable Seeds",
    title: "Vegetable Seeds",
  },
  {
    href: "/allproducts",
    src: img1,
    alt: "Flower Seeds",
    title: "Flower Seeds",
  },
  {
    href: "/allproducts",
    src: img2,
    alt: "Grow Bags",
    title: "Grow Bags",
  },
  {
    href: "/allproducts",
    src: img3,
    alt: "Soil & Fertilizer",
    title: "Soil & Fertilizer",
  },
  {
    href: "/allproducts",
    src: img4,
    alt: "Tools",
    title: "Tools",
  },
  {
    href: "/allproducts",
    src: img5,
    alt: "Bundles",
    title: "Bundles",
  },
];

const CollectionList = () => {
  return (
    <div className="container my-5">
      <div className="row">
        {collections.map((collection, index) => (
          <div className="col-2 mb-4" key={index}>
            <div
              className="card h-100 text-center border-0 shadow-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-body">
                <Link href={collection.href} passHref className="d-block">
                  <Image
                    src={collection.src}
                    alt={collection.alt}
                    width={183}
                    height={182}
                    className="rounded-circle img-fluid mx-auto"
                    sizes="183px"
                    priority
                  />
                </Link>
                <h3
                  className="mt-3"
                  style={{ fontSize: "14px", fontWeight: "600" }} // Adjusted font size and weight
                >
                  <Link
                    href={collection.href}
                    className="text-decoration-none text-dark"
                  >
                    {collection.title}
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionList;
