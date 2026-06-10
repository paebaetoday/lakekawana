// Trip.com Affiliate Link Configuration
// Update check-in/check-out dates and parameters as needed

export const TRIP_AFFILIATE_URL =
  "https://au.trip.com/hotels/detail/?cityEnName=Birtinya&cityId=331361&hotelId=63137905&checkIn=2026-06-10&checkOut=2026-06-11&adult=2&children=0&crn=1&ages=&curr=AUD&barcurr=AUD&hoteluniquekey=H4sIAAAAAAAA_-Nay8TFJMEktYyJo7-t8QSrEKORwVw2i_Mhjoe_asT03-ty8EwDgb5ehwCeGYwfL_TKbWSUb30duKMu1GEHI9MJxuOMC5g2vHkod4qFlWMinwTLJZYtjNHVStmplUpWJjpKJZklOalKVkphjiFKOkopqcXJQA6QlZibX5pXAmQbWugZWAIFShIrPFPAWpITc5JLcxJLUkMqC4BazXSUMoudS4oyC4JSczNLSlKBqtISc4pTQeJBqcVAmWSwoJIf0JgiqEBmfh5EuwGKWFhiTmkqxAVAC91SoXYY1sY-YmGKjv3EwvCLhaGJlaGLlWESKzPHccZdrDx-_sY-ls66hrpRuoZS8oYGBgamhsamproGiZYWaYZJSbomlibmJua6RiYGRkYarz5-73xtbGQtxTrlwPNp7AqMWoLxIZ4REYallUZFBtnmpZaGWQaMpxilDM1NjSzNzEyABlpa6hmZpqYWeSeFe5a7-HkwBrEZOJkYO5lH2XAxO4a6CHY6Jjy9wCTsIAXiKcJ4WiCeIYwX2P_kk_yl_Gf2kTCRJNbUPF3H0Iy5ogWMDYyMXYzcAowejBGMFSDeKkZ2LmYDI0MBpg2MjDsY_8MA4ytGkLEAaRyezRkCAAA&masterhotelid_tracelogid=100051355-0a98f1bb-494747-24022&detailFilters=17|1~17~1*131|0~131~-26.7418893|153.123622|Lake Kawana|0*80|1|1~80~1*29|1~29~1|2&hotelType=normal&display=inctotal&subStamp=525&isCT=true&isFlexible=F&locale=en-AU&Allianceid=6953703&SID=250316767&trip_sub1=&trip_sub3=D17794513";

export function getAffiliateUrl(
  checkIn?: string,
  checkOut?: string
): string {
  if (!checkIn || !checkOut) return TRIP_AFFILIATE_URL;

  let url = TRIP_AFFILIATE_URL;
  url = url.replace(/checkIn=[^&]+/, `checkIn=${checkIn}`);
  url = url.replace(/checkOut=[^&]+/, `checkOut=${checkOut}`);
  return url;
}
