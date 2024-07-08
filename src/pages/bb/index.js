import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import styles from "./index.module.css";
import { Poppins } from "next/font/google";
import StudentForm from "@/components/signup/StudentForm";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});
const index = () => {
  return (
    <div
      className={`${styles.bg}`}
      style={{ backgroundColor: "rgba(57, 175, 249, 1)" }}
    >
      <Container>
        <Row>
          <Col md={6} className="">
            <div className="">
              <div className="w-100 text-center mt-4 ">
                <Image
                  src="/assets/images/BriBooks.png"
                  height={45}
                  width={150}
                  alt="BriBooks"
                  className="logo img-fluid"
                  priority={true}
                />
              </div>

              <div className="mt-5">
                <p
                  className={`text-center mt-sm-0 mt-5 mx-sm-0 mx-2 text-white ${styles.heading} ${poppins.className} `}
                >
                  Discover the
                  <span className="ps-1 fw-bolder">
                    World's Largest AI-Enabled Book Writing Platform
                  </span>
                  for children, where they can write, publish, and promote their
                  books completely <span className="fw-bolder"> FREE </span> in
                  just 3 simple steps!
                </p>
              </div>

              <div
                style={{
                  background: "rgba(255, 255, 255, 0.5)",
                  borderRadius: "8.59px",
                }}
                className="d-flex justify-content-evenly align-items-center w-100 p-2"
              >
                <div className="text-center">
                  <Image
                    src="/assets/images/Signup/write1.png"
                    width={114}
                    height={79}
                    alt="write"
                    className={`img-fluid ${styles.writeImg}`}
                  />
                  <p className={`mb-0 ${styles.stepsTitle}`}>Write</p>
                </div>
                <Image
                  src="/assets/images/Signup/greaterThan_icon.png"
                  width={20}
                  height={20}
                  alt="play icon"
                  className={`img-fluid ${styles.playIcon}`}
                />
                <div className="text-center">
                  <Image
                    src="/assets/images/Signup/publish1.png"
                    width={94}
                    height={79}
                    alt="publish"
                    className={`img-fluid  ${styles.publishImg}`}
                  />
                  <p className={`mb-0 ${styles.stepsTitle}`}>Publish</p>
                </div>
                <Image
                  src="/assets/images/Signup/greaterThan_icon.png"
                  width={20}
                  height={20}
                  alt="play icon"
                  className={`img-fluid ${styles.playIcon}`}
                />
                <div className="text-center">
                  <Image
                    src="/assets/images/Signup/promote1.png"
                    width={77}
                    height={79}
                    alt="promote"
                    className={`img-fluid  ${styles.promoteImg}`}
                  />
                  <p className={`mb-0 ${styles.stepsTitle}`}>Promote</p>
                </div>
              </div>
              <div className={`${styles.part_bg} d-none d-sm-block `}>
                <div className="my-2">
                  <Image
                    src="/assets/images/Signup/patner.png"
                    width={728}
                    height={100}
                    alt="partner logos"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <StudentForm />
          </Col>
          <div className="d-sm-none">
            <div className="">
              <Image
                src="/assets/images/Signup/Group 1000004537.png"
                width={480}
                height={167}
                alt="partner logos"
                className="img-fluid"
              />
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default index;
