import { Page } from "@playwright/test";

export async function card_reader (page:Page) {

    const PreData = []

    for (let i = 0; i < 24; i++){
        let area = page.locator('.products-container > .tz-container:has(.products-title)').locator('.products'); 
        let card = area.locator('.products-i').nth(i);

        if (await card.isVisible()){
            let data = await card.locator('.products-i__bottom').textContent();
            PreData.push(data);
        }
        else{
            console.log('All data has been added to array');
            break; 
        }  
  }    

  return PreData;

}



