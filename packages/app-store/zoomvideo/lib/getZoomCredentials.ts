import { getZoomAppKeys } from "../../../../packages/app-store/zoomvideo/lib";


export default function getZoomCredentials(){

return getZoomAppKeys();

 /* export const getZoomCredentials =  () => {
    console.log("Test", process.env);
    return {client_id: process.env.ZOOM_CLIENT_ID, client_secret: process.env.ZOOM_CLIENT_SECRET};
  }; */
}