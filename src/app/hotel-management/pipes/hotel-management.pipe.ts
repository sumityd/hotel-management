import { Pipe, PipeTransform } from "@angular/core";

// implementing a pure pipe here
@Pipe({
  name: "nameFormat",
  pure: true,
})
export class HotelManagementPipe implements PipeTransform {
  transform(name: string): string {
    if (name == null || name == undefined) {
      name = "";
    }
    let str = name.trim();

    let res = "";
    let spaceIndex = str.indexOf(" ");

    if (spaceIndex < 0) {
      res = str.substr(0, 2);
    } else {
      res = str.charAt(0);
      res =
        res +
        str
          .slice(spaceIndex + 1)
          .trim()
          .charAt(0);
    }
    res = res.toUpperCase();
    return res;
  }
}
