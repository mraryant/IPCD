"use client";
import React, { useState } from "react";

const Contract = () => {
    const [copied, setCopied] = useState(false);
    const text = "0xc755377CD13ca4BedB87EED8D2C5105d46FFC388";

    const handleCopy = () => {
        navigator.clipboard
            .writeText(text)
            .then(() => {
                setCopied(true);
                setTimeout(() => {
                    setCopied(false);
                }, 2000); // Hide the popup after 2 seconds
            })
            .catch((err) => {
                console.error("Copy failed: ", err);
            });
    };




    return (
        <>


            <div id="contract1" className=" z-0 ">
                {/* <div className="shadow"></div>
        <div className="shadow2"></div> */}

                <div id="contract">
                    <h5 className=" text-[var(--prime-yellow)]  oxanium text-3xl">Contract Address</h5>
                    <h3 style={{ color: "white" }}>{text}</h3>


                    <div id="contract-button">

                        <button
                            className="btn "
                            style={{ width: "230px" }}
                            onClick={handleCopy}
                        >
                            <span>
                                {/* <img
                  src={Copy}
                  style={{ width: 25, height: 25, marginRight: 15 }}
                  alt=""
                /> */}
                                Copy Address
                            </span>
                        </button>
                        <button
                            className="btn"
                            style={{ width: "230px" }}
                            onClick={() =>
                                window.open(
                                    "https://bscscan.com/address/0xc755377CD13ca4BedB87EED8D2C5105d46FFC388",
                                    "_blank"
                                )
                            }
                        >
                            <span>
                                {/* <img
                  src={BSC}
                  style={{ width: 25, height: 25, marginRight: 15 }}
                  alt=""
                /> */}
                                BSC SCAN
                            </span>
                        </button>
                    </div>
                    {copied && (
                        <div className="popup mt-3" style={{ zIndex: 1, color: "white" }}>
                            Copied to clipboard!
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Contract;
