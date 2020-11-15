import React from "react";
import { Switch, Route } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import { Modal } from "@redq/reuse-modal";
import AppLayout from "containers/LayoutContainer/AppLayout";

function BaseRouter({ deviceType }) {
  return (
    <>
      <Switch>
        <AppLayout deviceType={deviceType}>
          <Modal>
            <Route path="">
              <PublicRoutes deviceType={deviceType} />
            </Route>
          </Modal>
        </AppLayout>
      </Switch>
    </>
  );
}

export default BaseRouter;
