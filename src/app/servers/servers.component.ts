import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]' atrybut div-a <div app-servers>
  // selector: '.app-servers' - css <div class="app-servers"> 
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

  allowNewServer = false;
  serverCreationStatus = "No server was created!"
  serverName = 'initial value';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  showSecret = false;
  log = [];

  constructor(){
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000);
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName + ' '+ new Date());
    this.serverCreationStatus = "Server was created "+ this.serverName;
    console.log("on create " +this.servers);
  }

  onUpdateServerName(event: any){
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value
  }

  onToggleSecret(){
    this.showSecret = !this.showSecret;
    this.log.push(new Date());
  }

}
