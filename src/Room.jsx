import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Room = () => {
  function randomID(len) {
    let result = "";
    if (result) return result;
    var chars =
        "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP",
      maxPos = chars.length,
      i;
    len = len || 5;
    for (i = 0; i < len; i++) {
      result += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return result;
  }
  
  const roomId ="a"
  
  let sharedLinks = [];

  sharedLinks.push({
    name: "Join Now!",
    url: window.location.href + "/viewer",
  });

  let myMeeting = async (element) => {
    // generate Kit Token
    const appID = 683948355;
    const serverSecret = "021d4e0c0dcb7a0336f5de0858bb8066";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      randomID(5),
      randomID(5)
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: element,
      showAudioVideoSettingsButton: false,
      showLayoutButton: false,
      showLeavingView: false,
      showRoomDetailsButton: false,
      preJoinViewConfig: {
        title: "Enter Your Name" ,
      },
    //   showPreJoinView: false,
      scenario: {
        mode: ZegoUIKitPrebuilt.LiveStreaming,
        config: {
          role:ZegoUIKitPrebuilt.Host,
          liveStreamingMode: ZegoUIKitPrebuilt.LiveStreamingMode,
        },
      },
      sharedLinks,
      onLeaveRoom:()=>{window.location.href="https://www.google.com"}
      ,
    });
    
    
  };

  return (
    <div
      className="myCallContainer"
      ref={myMeeting}
      style={{ width: "100vw", height: "100vh" }}
    ></div>
  );
};

export default Room;
