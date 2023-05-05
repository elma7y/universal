import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DivsService {
  getData() {
    return [
        {
            itemImageSrc: '<div>h1</div>',
            thumbnailImageSrc: '<div>h1</div>',
            alt: 'Description for Image 1',
            title: 'Title 1'
        },
        
    
    ];
}

getImages() {
    return Promise.resolve(this.getData());
}

  constructor() { }
}
