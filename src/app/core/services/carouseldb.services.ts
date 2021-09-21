
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { CarouselModel } from '../models/carousel-model';

//based on https://www.techiediaries.com/angular-10-firebase-database-crud/
@Injectable({ providedIn: 'root' })
export class CarouselDBService {

    constructor(private firestore: AngularFirestore) {}

    getCarouselSlides() {
        return this.firestore.collection('carousel').snapshotChanges()
        .pipe(
            map(res => {
                let dataList = [];
                res.forEach(res => {
                    dataList.push(res.payload.doc.data())
                })
                return dataList;
            })
        );
    }

    getCarouselSlide(carousel_title: string) {
        return this.getCarouselSlides().pipe(
            map(carouselSlidesData => {
                let foundCarouselSlideData = null;
                carouselSlidesData.every(carouselSlideData => {
                    if(carouselSlideData.carousel_title==carousel_title){
                        foundCarouselSlideData = carouselSlideData;
                        console.log("Carousel Slide from DB "+JSON.stringify(carouselSlideData));
                        return false
                    }
                    return true;
                  });

                  return foundCarouselSlideData;
            })
        );
    }

    createCarouselSlide(carouselSlide: CarouselModel){
        return this.firestore.collection('carousel').add(carouselSlide);
    }

    updateCarouselSlide(carouselSlide: CarouselModel){
        //id will be the email
        this.firestore.doc('carousel/' + carouselSlide.carousel_title).update(carouselSlide);
    }

    deleteCarouselSlide(carousel_title: string){
        this.firestore.doc('carousel/' + carousel_title).delete();
    }
}