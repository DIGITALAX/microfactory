/* eslint-disable max-len */
import React from "react";
import Document, { NextScript, Html, Main, Head } from "next/document";


class MyDocument extends Document {

  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-194369113-3"
          ></script>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900"
          ></link>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Raleway"
          ></link>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Roboto"
          ></link>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Bebas+Neue"
          ></link>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900"
          ></link>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900"
          ></link>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Baumans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900"
          ></link>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Arima+Madurai:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900"
          ></link>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900"
          ></link>
          {/* ipfs next.js fix */}
          <style
            dangerouslySetInnerHTML={{
              __html: `

            @font-face {
              font-family: "SewnTight";
              src: url("./fonts/SewnTight.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Internal Rainbows";
              src: url("./fonts/Internal Rainbows.otf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Gilroy";
              src: url("./fonts/Gilroy-Light.otf");
              font-weight: 400;
            }
            
            @font-face {
              font-family: "Gilroy";
              src: url("./fonts/Gilroy-ExtraBold.otf");
              font-weight: 700;
            }
            
            @font-face {
              font-family: "Gilroy";
              src: url("./fonts/Gilroy-ExtraBold.otf");
              font-weight: 900;
            }
            @font-face {
              font-family: "Berkeley";
              src: url("./fonts/EBGaramond-VariableFont_wght.ttf");
              font-weight: 400;
            }
            @font-face {
              font-family: "Armata-Regular";
              src: url("./fonts/Armata-Regular.ttf");
              font-weight: 400;
            }
            @font-face {
              font-family: "Animosa";
              src: url("./fonts/Animosa-Regular.otf");
              font-weight: 400;
            }
            @font-face {
              font-family: "Faction Personal";
              src: url("./fonts/Faction_Outline.otf");
              font-weight: 400;
            }
            @font-face {
              font-family: "THIS FONT IS EMPTY1";
              src: url("./fonts/THIS FONT IS EMPTY1.ttf");
              font-weight: 400;
            }
            @font-face {
              font-family: "Babycakes";
              src: url("./fonts/BABYCAKES.ttf");
              font-weight: 400;
            }
            @font-face {
              font-family: "Fashionism";
              src: url("./fonts/fashl954.ttf");
              font-weight: 400;
            }
            @font-face {
              font-family: "Redmond Fashion";
              src: url("./fonts/RedmondFashion.ttf");
              font-weight: 400;
            }
            @font-face {
              font-family: "Punk Fashion";
              src: url("./fonts/CFPunkFashionPERSONAL-Regul.ttf");
              font-weight: 400;
            }
            @font-face {
              font-family: "Regular Fashion";
              src: url("./fonts/regularfashionDEMO.otf");
              font-weight: 400;
            }
            @font-face {
              font-family: "Just Old Fashion";
              src: url("./fonts/JustOldFashion.ttf");
              font-weight: 400;
            }
            @font-face {
              font-family: "Akira Expanded";
              src: url("./fonts/Akira Expanded Demo.otf");
              font-weight: 400;
            }
            @font-face {
              font-family: "TypoGraphica";
              src: url("./fonts/TypoGraphica_demo.otf");
              font-weight: 400;
            }

            @font-face {
              font-family: "LEMON MILK";
              src: url("./fonts/LEMONMILK-Regular.otf");
              font-weight: 400;
            }

            @font-face {
              font-family: "LEMON MILK";
              src: url("./fonts/LEMONMILK-Bold.otf");
              font-weight: 700;
            }

            @font-face {
              font-family: 'NewYork';
              src: url("./fonts/NewYork.otf");
            }

            @font-face {
              font-family: 'Apex Mk3';
              font-weight: 500;
              src: url("./fonts/Apex Mk3-Medium.otf");
            }

            @font-face {
              font-family: 'Atmosphere';
              font-weight: 400;
              src: url("./fonts/Atmosphere-Regular.ttf");
            }

            @font-face {
              font-family: 'Mr. Machine';
              font-weight: 400;
              src: url("./fonts/Mr. Machine.ttf");
            }

            @font-face {
              font-family: 'New Press';
              font-weight: 400;
              src: url("./fonts/NewPress.otf");
            }


            @font-face {
              font-family: 'F25 Bank Printer';
              font-weight: 400;
              src: url("./fonts/F25_Bank_Printer.ttf");
            }


            @font-face {
              font-family: 'Old Press Original';
              font-weight: 400;
              src: url("./fonts/Old Press Original.otf");
            }
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
