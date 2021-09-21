
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { CategoryModel } from '../models/category-model';

//based on https://www.techiediaries.com/angular-10-firebase-database-crud/
@Injectable({ providedIn: 'root' })
export class CategoriesDBService {

    constructor(private firestore: AngularFirestore) {}

    getCategories() {
        return this.firestore.collection('categories').snapshotChanges()
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

    getCategory(email: string) {
        return this.getCategories().pipe(
            map(categoriesData => {
                let foundCategoryData = null;
                categoriesData.every(categoryData => {
                    if(categoryData.email==email){
                        foundCategoryData = categoryData;
                        console.log("Category from DB "+JSON.stringify(categoryData));
                        return false
                    }
                    return true;
                  });

                  return foundCategoryData;
            })
        );
    }

    createGame(category: CategoryModel){
        return this.firestore.collection('categories').add(category);
    }

    updateGame(category: CategoryModel){
        //id will be the email
        this.firestore.doc('categories/' + category.category_title).update(category);
    }

    deleteGame(category_title: string){
        this.firestore.doc('categories/' + category_title).delete();
    }
}