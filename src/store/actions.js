export default {
  async loadRooms(context) {

    const response = await fetch("https://learning-vue-40341-default-rtdb.firebaseio.com/rooms.json");
    const roomsData = await response.json();
    if (!response.ok) {
      const error = new Error(roomsData.message || "Failed to fetch");
      throw error;
    }
    else{
      console.log(roomsData);
      const rooms = [];
      for(const key in roomsData){
        if (roomsData[key]===null){
          console.log('return');
        }
        else{
          const room = {
            id: key,
            price: roomsData[key].price,
            capacity: roomsData[key].capacity,
            size: roomsData[key].size,
            details: roomsData[key].details,
            title: roomsData[key].title
          };
          rooms.push(room);
        }
      }
  //console.log(rooms);
    context.commit("loadRooms", rooms);
  }
}
};
