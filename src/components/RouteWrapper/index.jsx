import React from "react";
import styled from "@emotion/styled";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import { routes } from "@/routes";
import { Text, FormLabel, Switch, Box } from "@chakra-ui/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function RouteWrapper() {
  return (
    <Box>
      <Header>
      </Header>
      <ContentWrapper>
        <InsideContentWrapper>
          {routes.map((route, i) => (
            <Routes key={i}>
              <Route {...route}>
                {route.children.map((child, i) => (
                  <Route
                    key={i}
                    path={child.path}
                    index={child.index}
                    element={<child.elements />}
                  />
                ))}
              </Route>
            </Routes>
          ))}
        </InsideContentWrapper>
      </ContentWrapper>
      <Footer></Footer>
    </Box>
  );
}

const ContentWrapper = styled("div")`
  position: relative;
  width: 100%;
  // margin-top: 80px;
  min-height: 100vh;
  height: 100%;
  background-color: #ffffff;
  max-height: 100%;
  overflow: -webkit-paged-x;
  font-family: 'Poppins', sans-serif;
`;

const InsideContentWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export default RouteWrapper;
