import * as React from "react";
import IRRFormulaImage from './IRRFormula.png';

export default function WhatIsIRR() {
    return(<>
            <br/>
            <div style={{fontFamily: 'oswald' ,
                fontSize: "20px",
                paddingLeft: "20px",
                paddingRight: "20px",
                color: "black",
                opacity: ".8"
            }}>
                <p><strong>Learn about Internal Rate of Return</strong> <br/> Internal Rate of Return, it is an important data point
                when making investment decisions</p>

            <h4>TL:DR - just watch this video I made👇🏿</h4>
            <div style={{textAlign: "center"}}>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/3P4syXdF7mg"
    title="YouTube video player" frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen/>            </div>
                <h1>IRR explained 👀 </h1>
                <p>Internal rate of return (IRR) is a key metric used in financial analysis to estimate the profitability of potential investments, this metric is used often (not exclusively) in Real Estate when comparing investments.</p>
                <strong>IRR Can Help when Comparing</strong>
                <p>Generally, the greater an internal rate of return, the more fruitful the investment/venture is.
                   The power of IRR is that when comparing investment options with other similar characteristics, the investment with the highest IRR probably would be considered the best.</p>
                <div style={{backgroundColor: "black", color: "white", padding: "10px"}}>
                    <h2> IRR Formula</h2>
                    <img height="auto" width={"100%"} src={IRRFormulaImage} alt={"IRR Formula"} />
                </div>

            </div>


        </>

    )
}
