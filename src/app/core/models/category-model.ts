export class CategoryModel{
  private _category_title: string;
  private _category_description: string;
  private _category_value: string;

  constructor(
    category_title: string,
    category_description: string,
    category_value: string
  ){
    this._category_title = category_title;
    this._category_description = category_description;
    this._category_value = category_value;
  }

  public get category_title(): string {
		return this._category_title;
	}

	public set category_title(value: string) {
		this._category_title = value;
	}

  public get category_description(): string {
		return this._category_description;
	}

	public set category_description(value: string) {
		this._category_description = value;
	}

  public get category_value(): string {
		return this._category_value;
	}

	public set category_value(value: string) {
		this._category_value = value;
	}

}
