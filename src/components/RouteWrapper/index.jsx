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
        <Footer />
        </InsideContentWrapper>
      </ContentWrapper>
    </Box>
  );
}

const ContentWrapper = styled("div")`
  position: relative;
  width: 100%;
  min-height: 100vh;
  // overflow: -webkit-paged-x;
  font-family: 'Poppins', sans-serif;
`;

const InsideContentWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export default RouteWrapper;
