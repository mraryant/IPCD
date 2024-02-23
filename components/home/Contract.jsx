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


    const [tooltipVisible, setTooltipVisible] = useState(false);

    const handleMouseEnter = () => {
        setTooltipVisible(true);
    };

    const handleMouseLeave = () => {
        setTooltipVisible(false);
    };

    return (
        <>
            <button
                type="button"
                className="ms-3 mb-2 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                Tooltip right
            </button>

            <div
                id="tooltip-right"
                role="tooltip"
                className={`absolute z-10 ${tooltipVisible ? 'visible' : 'invisible'
                    } inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm   tooltip dark:bg-gray-700`}
            >
                Tooltip on right
                <div className="tooltip-arrow" data-popper-arrow></div>
            </div>

            <div id="contract1" className=" ">
                {/* <div className="shadow"></div>
        <div className="shadow2"></div> */}

                <div id="contract">
                    <h5 className=" text-[var(--prime-yellow)]  font-['Oxanium'] text-3xl">Contract Address</h5>
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
