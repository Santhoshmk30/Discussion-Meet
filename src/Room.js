import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';

function Room() {
    const {roomID} = useParams();
    let  myMeeting = async (element)=> {
        const appID = 1618977281;
        const serverSecret = "81801d4d33d83bc943d4f921da9344d2";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,Date.now().toString(), "Santhosh");
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
         sharedLinks: [
              {
                name: 'Share The Link',
                url:`http://localhost:3001/room/${roomID}`
              },
            ],
            scenario: {
              mode: ZegoUIKitPrebuilt.GroupCall.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
            },
            showRoomTimer: true
          });
    
    
    }
  return (
    <div ref={myMeeting}></div>
  )
}

export default Room
