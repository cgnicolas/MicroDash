export const selectArduinoStates = state => state.arduino.arduinoStates;
export const selectArduinoTypes = state => {
    const ardStates = state.arduino.arduinoStates;
    let types = [];
    ardStates.map((state) => {
        const type = state.type;
        if(!types.includes(type)){
            types.push(type);
        }
    })
    return types;
}
export const selectCurrentType = state => state.arduino.currentType;