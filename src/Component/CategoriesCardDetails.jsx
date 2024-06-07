import React from "react";
import HeaderComponent from "./HeaderComponent";
import Footercomponent from "./Footercomponent";

const CategoriesCardDetails = () => {
  return (
    <>
    <HeaderComponent/>
      {/* <div className="row justify-content-center overflow-hidden mt-5">
        <div className="col-4">
          <div className=" mt-2">
            <img src="/img/godiwasuper.png" alt="Card Image" width="100%" />
          </div>
        </div>
        <div className="col-4">
        <h2 className="card-title text-success fw-bold">Godiwa Super</h2>
        <p className="py-2 text-success fw-bold">DESCRIPTION</p>

        <p className="">Lustre is a unique new combination of two systemic fungicides. It’s a broad spectrum, dual systemic fungicide which controls a wide range of fungal diseases. Its DSC technology provides longer duration control on diseases and helps the plant to attain its natural growth thereby improves the quality of products and enhances the yield and profit of farmers.</p>
        </div>
      </div>

      <div className="container">
        <table className="table table-bordered mt-3">
            <thead>
                <tr className="bg-success">
                    <th className="bg-lightblue">CROPS</th>
                    <th className="bg-lightgreen col-md-6">
                TARGET PEST/ DISEASE</th>
                    <th className="bg-lightcoral">DOSE PER ACRE</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="bg-lightblue">Paddy</td>
                    <td className="bg-lightgreen">Sheath Blight</td>
                    <td className="bg-lightcoral"> 384 ml </td>
                </tr>
                <tr>
                    <td className="bg-lightblue">Chilli</td>
                    <td className="bg-lightgreen">Powdery mildew (Leveillula taurica), Fruit rot (Alternaria solani), Die Back (Colletotrichum capsici)</td>
                    <td className="bg-lightcoral">384-400 ml</td>
                </tr>
                <tr>
                    <td className="bg-lightblue">Apple</td>
                    <td className="bg-lightgreen">Alternaria blotch (Alternaria mali) and Premature leaf fall (Marssonina coronaria)</td>
                    <td className="bg-lightcoral">65ml/100 litre</td>
                </tr>
               
            </tbody>
        </table>

        <div className="benefit mt-5">
            <p className="text-success fw-bold">FEATURES & BENEFITS</p>
            <p className="my-2">Its broad spectrum control provides disease-free crop.</p>
            <p>It has a great phyto-tonic effect, which gives farmers a lush green healthy crop.</p>
        </div>
    </div>
     */}

<div className="row justify-content-center overflow-hidden mt-5">
        <div className="col-12 col-md-4 mb-3 mb-md-0">
          <div className="mt-2 text-center text-md-start">
            <img src="/img/godiwasuper.png" alt="Card Image" className="img-fluid" />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <h2 className="card-title text-success fw-bold">Godiwa Super</h2>
          <p className="py-2 text-success fw-bold">DESCRIPTION</p>
          <p>
            Lustre is a unique new combination of two systemic fungicides. It’s a broad spectrum,
            dual systemic fungicide which controls a wide range of fungal diseases. Its DSC technology
            provides longer duration control on diseases and helps the plant to attain its natural
            growth thereby improves the quality of products and enhances the yield and profit of farmers.
          </p>
        </div>
      </div>

      <div className="container mt-3">
        <table className="table table-bordered table-striped">
          <thead className="py-5">
            <tr className="bg-success text-white p-5 text-center">
              <th className="py-3">CROPS</th>
              <th className="py-3 col-md-6">TARGET PEST/ DISEASE</th>
              <th className="py-3">DOSE PER ACRE</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td className="">Paddy</td>
              <td className="">Sheath Blight</td>
              <td className="">384 ml</td>
            </tr>
            <tr>
              <td className="">Chilli</td>
              <td className="">
                Powdery mildew (Leveillula taurica), Fruit rot (Alternaria solani), Die Back (Colletotrichum capsici)
              </td>
              <td className="">384-400 ml</td>
            </tr>
            <tr>
              <td className="">Apple</td>
              <td className="">
                Alternaria blotch (Alternaria mali) and Premature leaf fall (Marssonina coronaria)
              </td>
              <td className="l">65ml/100 litre</td>
            </tr>
          </tbody>
        </table>

        <div className="benefit mt-5">
          <p className="text-success fw-bold">FEATURES & BENEFITS</p>
          <p className="my-2">Its broad spectrum control provides disease-free crop.</p>
          <p>It has a great phyto-tonic effect, which gives farmers a lush green healthy crop.</p>
        </div>
      </div>
    <Footercomponent/>

 
 
    </>
  );
};

export default CategoriesCardDetails;
