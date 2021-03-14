import { CategoryModel } from './category-model';

export class GameModel{
  private _game_logo_link: string;
  private _game_title: string;
  private _game_description: string;
  private _game_link: string;
  private _game_iframelink: string;
  private _game_category: CategoryModel;
  private _game_rating: number;

  constructor(
      game_logo_link: string, //Game Logo is optional
      game_title: string,
      game_description: string,
      game_link: string,
      game_iframelink: string,
      game_category: CategoryModel,
      game_rating: number = 0 //Default is 0 Rating
  ){
    this._game_logo_link = game_logo_link;
    this._game_title = game_title;
    this._game_description = game_description;
    this._game_link = game_link;
    this._game_iframelink = game_iframelink;
    this._game_category = game_category;
    this._game_rating = game_rating;
  }


	public get game_logo_link(): string {
		return this._game_logo_link;
	}

	public get game_title(): string {
		return this._game_title;
	}

	public get game_description(): string {
		return this._game_description;
	}

	public get game_link(): string {
		return this._game_link;
	}

	public get game_iframelink(): string {
		return this._game_iframelink;
	}

	public get game_category(): CategoryModel {
		return this._game_category;
	}

	public get game_rating(): number {
		return this._game_rating;
	}

	public set game_logo_link(value: string) {
		this._game_logo_link = value;
	}

	public set game_title(value: string) {
		this._game_title = value;
	}

	public set game_description(value: string) {
		this._game_description = value;
	}

	public set game_link(value: string) {
		this._game_link = value;
	}

  public set game_iframelink(value: string) {
		this._game_iframelink = value;
	}

	public set game_category(value: CategoryModel) {
		this._game_category = value;
	}

	public set game_rating(value: number) {
		this._game_rating = value;
	}


}
