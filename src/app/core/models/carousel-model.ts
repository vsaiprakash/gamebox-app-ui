export class CarouselModel{
  private _carousel_title: string;
  private _carousel_description: string;
  private _carousel_img_link: string;
  private _carousel_game_link: string;

  constructor(
    carousel_title: string,
    carousel_description: string,
    carousel_img_link: string,
    carousel_game_link: string
  ){
    this._carousel_title = carousel_title;
    this._carousel_description = carousel_description;
    this._carousel_img_link = carousel_img_link;
    this._carousel_game_link = carousel_game_link;
  }

  public get carousel_title(): string {
		return this._carousel_title;
	}

	public set carousel_title(value: string) {
		this._carousel_title = value;
	}

  public get carousel_description(): string {
		return this._carousel_description;
	}

	public set carousel_description(value: string) {
		this._carousel_description = value;
	}

  public get carousel_img_link(): string {
		return this._carousel_img_link;
	}

	public set carousel_img_link(value: string) {
		this._carousel_img_link = value;
	}

  public get carousel_game_link(): string {
		return this._carousel_game_link;
	}

	public set carousel_game_link(value: string) {
		this._carousel_game_link = value;
	}
}
