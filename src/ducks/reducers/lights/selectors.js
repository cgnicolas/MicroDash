
export const selectLightsForRoom = state => {
    const filter = (light) => {
        const { currentRoom } = state.lights;
        // console.log("currentRoom Lights", currentRoom.lights);
        if(currentRoom.lights){
            return currentRoom.lights.includes(light.id.toString());
        }
        return false;
    }
    console.log("Filtering");
    return state.lights.lights.filter(filter);
}

function convertXYtoRGB(xy){
    
}

export const selectRooms = state => state.lights.rooms;
export const selectCurrentRoom = state => state.lights.currentRoom;
export const selectRoomsPending = state => state.lights.roomsPending;
export const selectLightsPending = state => state.lights.lightsPending;