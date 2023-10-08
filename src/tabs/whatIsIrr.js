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
                <h1>About Internal Rate of Return</h1> 
                <br/> The discount rate at which the net present value (NPV) of a series of projected cash flows equals zero, serving as a key metric to evaluate and compare the potential profitability of investments.


            <h4>TL:DR - just watch this video I made👇🏿</h4>
            <div style={{textAlign: "center"}}>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/3P4syXdF7mg"
    title="YouTube video player" frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen/>            </div>
                <h1>IRR explained 👀 </h1>
             
    <strong>Internal Rate of Return </strong> represents the annualized effective compounded return rate at which an investment equates its net present value (NPV) to zero.  While the metric is most commonly associated with financial markets, it's ubiquitously utilized across a plethora of sectors, from corporate finance to private equity, and notably, in Real Estate for discerning the potential profitability of property investments.
<br/>
    <h3>When an IRR exceeds a company's required rate of return, the investment is typically considered favorable, as it's poised to yield returns that surpass the cost of capital. </h3> Conversely, when the IRR is below the cost of capital, it might indicate potential losses. This binary perspective underscores the IRR's profound utility in comparing various investment opportunities: A higher IRR usually alludes to a potentially higher return on investment (ROI), rendering it a superior choice relative to other options. 
    <br/>

   <h3> IRR does not account for factors like the size of the investment or the project's absolute profitability.</h3>  As a result,  investors often use it in comnbination with other financial metrics, ensuring a comprehensive view of an investment's potential.

    <br/>

               <div style={{backgroundColor: "transparent", color: "black", padding: "10px"}}>
                    <h2> IRR Formula</h2>
                   <img 
    style={{
        width: '100%',
        height: 'auto',
        borderRadius: '15px', // This rounds the corners
        opacity: '80%',
       boxShadow: '0px 0px 2px 2px rgba(0, 0, 0, 0.4)' // This adds a light shadow
    }} 
    src={IRRFormulaImage} 
    alt="IRR Formula" 
/>

                </div>

            </div>


        </>

    )
}
