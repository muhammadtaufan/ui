import React from "react";
import styled from "@emotion/styled";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import { routes } from "@/routes";
import { Text, FormLabel, Switch } from "@chakra-ui/react";

function RouteWrapper() {
  const testLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/768px-Google_%22G%22_Logo.svg.png'
  return (
    <BlockWrapper>
      <div style={{ display: "flex" }}>
        <div style={{ display: "block", minHeight: "100%" }}>
          <SideBar>
            <HeaderSidebar>
              <img src={testLogo} />
            </HeaderSidebar>
            <SideBarMenu>
              {routes.map((route, i) => (
                <SideTitle key={i}>
                  {/* <img src={testLogo} /> */}
                  <Link
                    onClick={() =>
                      selectedRoute(i + 1, route.name, route.pathname)
                    }
                    style={{ fontWeight: "600", fontSize: "16px" }}
                    to={route.pathname}
                  >
                    {route.name}
                  </Link>
                </SideTitle>
              ))}
              {/* <ButtonLogout onClick={handleLogout}>Logout</ButtonLogout> */}
            </SideBarMenu>
          </SideBar>
        </div>
      </div>
      <HeaderInsideContent>
        {/* {getMainPath === `store` && (
          <>
            <FormLabel htmlFor="email-alerts" mb="0">
              Operasional Layanan
            </FormLabel>
            <Switch
              isChecked={_stateStore.service_hour_status}
              size="md"
              colorScheme="purple"
              onChange={handleStatus}
            />
          </>
        )} */}
      </HeaderInsideContent>
      <ContentWrapper>
        {/* <Text fontWeight="600" fontSize="18px" padding="10px">
          {getPathLocalStorage}
        </Text> */}
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
    </BlockWrapper>
  );
}

const BlockWrapper = styled("div")`
  display: block;
`;

const SideBar = styled("div")`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 239px;
  height: 100vh;
  background-color: #fbfaff;
  min-height: 100%;
  border-right: 1px solid #eceaee;
`;

const ContentWrapper = styled("div")`
  position: relative;
  padding: 20px;
  width: 100%;
  max-width: calc(100% - 240px);
  min-height: 100vh;
  height: 100%;
  background-color: #ffffff;
  max-height: 100%;
  overflow: auto;
  margin-left: 239px;
  margin-top: 50px;
`;

const InsideContentWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 10px;
`;

const HeaderInsideContent = styled("div")`
  position: fixed;
  z-index: 1;
  background-color: #ffffff;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 10px;
  border: 1px solid #eceaee;
`;

const HeaderSidebar = styled("div")`
  width: 100%;
  height: 50px;
  display: flex;
  align-content: center;
  padding: 15px 15px 15px 24px;

  img {
    width: 87px;
    height: 23px;
  }
`;

const SideBarMenu = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 4vh;
  padding: 20px;
  padding: 20px 0 20px 20px;
}
`;

const SideTitle = styled("div")`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 10px;
  border-right: ${(props) => props.selected && `2px solid #673ab7`};
`;

const ButtonLogout = styled("div")`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #673ab7;
  padding: 14px;
  left: 0;
  text-align: center;
  font-weight: 700;
  color: white;
  cursor: pointer;
`;

export default RouteWrapper;
