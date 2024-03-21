
import { Component, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import { NgxCaptureService } from 'ngx-capture';
import { tap } from 'rxjs';
import html2canvas from 'html2canvas';   //help to take ss



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private captureService:NgxCaptureService) {}

// if you want to take screenshot of particular area
// @ViewChild('screenshotArea') screenshotArea: ElementRef;
// const element = this.screenshotArea.nativeElement;


  screenshot(){
    
      html2canvas(document.body).then((canvas) => {
          const imageDataUrl = canvas.toDataURL('image/png');
          const pdf = new jsPDF('p', 'mm', 'a4');
      
          const imgWidth = 210;
          const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
          pdf.addImage(imageDataUrl, 'PNG', 0, 0, imgWidth, imgHeight);
          pdf.save('screenshot.pdf');
      });

  }

};

