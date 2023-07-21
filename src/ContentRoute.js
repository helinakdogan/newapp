import React, { useEffect } from "react";
import { Redirect, Route, withRouter } from "react-router-dom";
import { Content } from "./Content";

function ContentRoute(props) {
  const {
    children,
    component,
    render,
    yetkiVarMi,
    asideMenuHidden,
    breadcrumbs,
    componentProps,
  } = props;

  // asideMenuHidden
  //   ? document.getElementById("kt_body").classList.add("aside-minimize")
  //   : document.getElementById("kt_body").classList.remove("aside-minimize");
  // const lastBreadCrumb = breadcrumbs.at(-1);
  // useEffect(() => {
  //   if (lastBreadCrumb?.title && lastBreadCrumb.title.startsWith(":")) {
  //     document.title =
  //       breadcrumbs.slice(-2)[0].title +
  //       " | " +
  //       window.location.href.substring(
  //         window.location.href.lastIndexOf("/") + 1,
  //       );
  //   } else if (lastBreadCrumb?.title) {
  //     document.title = lastBreadCrumb.title;
  //   } else {
  //     document.title = "ASAT";
  //   }
  // }, [lastBreadCrumb?.title]);
  return yetkiVarMi ? (
    <Route {...props}>
      {/* {typeof children === "function" ? (
        <Content>{children(props)}</Content>
      ) : children ? (
        <Content>{children}</Content>
      ) : component ? (
        <>
          <Content>{React.createElement(component, props)}</Content>
          <PageTitle breadcrumbs={breadcrumbs} />
        </>
      ) : render ? (
        <Content>{render(props)}</Content>
      ) : null} */}

      {(routeProps) => {
        if (typeof children === "function") {
          return <Content>{children(routeProps)}</Content>;
        }

        if (!routeProps.match) {
          return null;
        }

        if (children) {
          return <Content>{children}</Content>;
        }

        if (component) {
          return (
            <>
              <Content>
                {React.createElement(component, {
                  ...routeProps,
                  ...componentProps,
                })}
              </Content>
            </>
          );
        }

        if (render) {
          return <Content>{render(routeProps)}</Content>;
        }

        return null;
      }}
    </Route>
  ) : (
    <Redirect exact from="/" to="/anasayfa/403" />
  );
}

export default withRouter(ContentRoute);
