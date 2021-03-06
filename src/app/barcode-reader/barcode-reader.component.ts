import { Component, OnInit } from '@angular/core';
import { BarcodeReader } from 'dynamsoft-javascript-barcode';
import { OverlayManager } from '../overlay';

@Component({
  selector: 'app-barcode-reader',
  templateUrl: './barcode-reader.component.html',
  styleUrls: ['./barcode-reader.component.css'],
})
export class BarcodeReaderComponent implements OnInit {
  isLoaded = false;
  overlay: HTMLCanvasElement | undefined;
  context: CanvasRenderingContext2D | undefined;
  reader: BarcodeReader | undefined;
  overlayManager: OverlayManager;

  constructor() {
    this.overlayManager = new OverlayManager();
  }

  ngOnInit(): void {
    this.overlayManager.initOverlay(document.getElementById('overlay') as HTMLCanvasElement);
    (async () => {
      this.reader = await BarcodeReader.createInstance();
      this.isLoaded = true;
    })();
  }

  onChange(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      let file = fileList.item(0) as any;
      if (file) {
        let fr = new FileReader();
        fr.onload = (event: any) => {
          let image = document.getElementById('image') as HTMLImageElement;
          if (image) {
            image.src = event.target.result;
            const img = new Image();

            img.onload = (event: any) => {
              this.overlayManager.updateOverlay(img.width, img.height);
              if (this.reader) {
                this.reader.decode(file).then((results: any) => {
                  console.log(results);
                  let txts: any = [];
                  let elem = document.getElementById('result');
                  try {
                    let localization;
                    if (results.length > 0) {
                      for (var i = 0; i < results.length; ++i) {
                        txts.push(results[i].barcodeText);
                        localization = results[i].localizationResult;
                        this.overlayManager.drawOverlay(
                          localization,
                          results[i].barcodeText
                        );
                      }

                      if (elem) {
                        elem.innerHTML = txts.join(', ');
                      }
                    } else {
                      if (elem) {
                        elem.innerHTML = txts.join(', ');
                      }
                    }
                  } catch (e) {
                    alert(e);
                  }
                });
              }
            };
            img.src = event.target.result;
          }
        };
        fr.readAsDataURL(file);
      }
    }
  }
}
