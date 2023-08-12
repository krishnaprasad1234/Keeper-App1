import React from "react";

function app(){
    const d=new Date();
    const t=d.getFullYear();
    return (<footer>Copyright@{t}</footer>);
}
export default app;