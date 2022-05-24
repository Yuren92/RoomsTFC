import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private allRooms: any;

  private localityRoom: any;

  private userRoom: any;

  private  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'authorization': '750e8b43e5ed564462c90ef0d382db26'
    })
  };


  constructor(private http : HttpClient) { this.getAllRoom()}

  getUpdateAllRoom(){
    this.http.get("http://loadbalancerroom-1781365273.us-east-1.elb.amazonaws.com/room").subscribe(
      (response) => {
        console.log(response);
        this.allRooms = response;
      })
  }

  getAllRoom(){
      return this.allRooms;
  }

  getRoomById(id: number)
  {
    for(let Room of this.allRooms){
      if(Room.id == id)
        return Room;
    }
    var room :any;
    this.http.get("http://loadbalancerroom-1781365273.us-east-1.elb.amazonaws.com/room/"+id).subscribe(
      (response) => {
        console.log(response);
        room = response
      })
      return room;
  }

  getRoomByLocality(locality: string)
  {
      return this.localityRoom;
  }

  getUpdateRoomByLocality(locality: string)
  {
    this.http.get("http://loadbalancerroom-1781365273.us-east-1.elb.amazonaws.com/room/locality/"+locality).subscribe(
      (response) => {
        console.log(response);
        this.localityRoom = response
      })
  }

  getUpdateRoomsByUserId(userId: number)
  {
    this.http.get("http://loadbalancerroom-1781365273.us-east-1.elb.amazonaws.com/room/user/"+userId).subscribe(
      (response) => {
        console.log(response);
        this.userRoom = response
      })
  }

  getRoomsByUserId(userId: number)
  {
      return this.userRoom;
  }

  postNewRoom(room : JSON)
  {
    let json = JSON.stringify(room);
    let params = "json="+json;
    return this.http.post( "http://loadbalancerroom-1781365273.us-east-1.elb.amazonaws.com/room/", params, this.httpOptions);
  }

}