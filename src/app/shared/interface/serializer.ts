export interface Serializer {
  fromFormToRequestModel(json: any): any;
}