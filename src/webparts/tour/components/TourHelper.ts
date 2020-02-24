import {
  sp
} from "@pnp/sp";
import { graph } from "@pnp/graph";

import { sortBy } from '@microsoft/sp-lodash-subset';


export class TourHelper {

  public static getTourSteps(settings: any[]): any[] {

    var result: any[] = new Array<any>();

    if (settings != undefined) {
      const sortedSettings = sortBy(settings, ['Position']);

      sortedSettings.forEach(ele => {
        if (ele.Enabled) {
          // console.log(ele.WebPart);
          result.push(
            {
              selector: ele.WebPart.startsWith('ms-suiteux-search-box') ? `form[class^='${ele.WebPart}']` : '[data-sp-feature-instance-id=\'' + ele.WebPart + '\']',
              content: ele.StepDescription
            });
        }
      });

    }
    return result;
  }

}
