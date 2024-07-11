import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState, useEffect, useCallback } from "react";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Lottie from "react-lottie";
import * as animationData from "../../assets/lottie/no_connection.json";
import CrossIcon from "../../assets/images/cross.svg";
const NoConnection = (props) => {
  const router = useRouter();
  const [connected, setConnected] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("online", _handleConnectionChange);
      window.addEventListener("offline", _handleConnectionChange);

      return () => {
        window.removeEventListener("online", _handleConnectionChange);
        window.removeEventListener("offline", _handleConnectionChange);
      };
    }
  }, []);

  const _handleConnectionChange = useCallback(() => {
    const condition = navigator.onLine ? "online" : "offline";

    if (condition === "online") {
      const webPing = setInterval(() => {
        fetch(process.env.NEXT_PUBLIC_API + "connection", {
          mode: "no-cors",
        })
          .then(() => {
            setConnected(true);
            clearInterval(webPing);
          })
          .catch(() => setConnected(false));
      }, 2000);
      return;
    }

    setConnected(false);
  }, []);

  if (connected) return null;

  return (
    <>
      <Modal
        onHide={() => setConnected(true)}
        show={!connected}
        backdrop="static"
        keyboard={false}
        contentClassName="modal-progress"
        centered
      >
        <Modal.Body>
          <Lottie
            isClickToPauseDisabled={true}
            options={{
              loop: true,
              animationData,
            }}
            width={400}
          />

          <h4 className="text-center">No Internet Connection</h4>
        </Modal.Body>
      </Modal>

      {!connected && (
        <div className="fixed btn-close-svg">
          <Image
            src={CrossIcon}
            height={45}
            width={45}
            alt="BriBooks close"
            className="img-fluid"
            onClick={() => setConnected(true)}
          />
        </div>
      )}
    </>
  );
};

export default NoConnection;
