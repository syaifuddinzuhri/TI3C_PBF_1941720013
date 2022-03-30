import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProjectBox from "../../components/Elements/ProjectBox";
import { useNavigate } from "react-router-dom";

const ListProduct = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = () => {
      fetch("http://localhost:3001/products")
        .then((res) => res.json())
        .then((json) => {
          setProducts(json);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getProducts();
  }, []);
  
  return (
    <>
      <Wrapper id="projects">
        <div className="whiteBg">
          <div className="container">
            <HeaderInfo>
              <h1 className="font40 extraBold">All Products</h1>
              <p className="font13" style={{ marginTop: "10px" }}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut
                <br />
                labore et dolore magna aliquyam erat, sed diam voluptua.
              </p>
            </HeaderInfo>
            <div className="row textCenter">
              {products.length > 0 ? (
                products.map((item, key) => {
                  return (
                    <div
                      className="col-xs-12 col-sm-4 col-md-4 col-lg-4"
                      key={key}
                    >
                      <ProjectBox
                        data={item}
                        action={() => navigate(`/product/${item.id}`)}
                      />
                    </div>
                  );
                })
              ) : (
                <h1>Data not found</h1>
              )}
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default ListProduct;

const Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  padding-top: 80px;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
