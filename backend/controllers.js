import * as cheerio from 'cheerio';
import axios from 'axios';

const homePage = async (page) => {
    const {data} = await axios.get(`https://coinmarketcap.com/?page=${page}`);
    const currencies = [];
    const $ = cheerio.load(data);
    $('tr').each((index, element) => {
        $(element).find('td').each((index, element) => {
            if (index===2) {
                const url = $(element).find('a:first').attr('href');
                let symbol = $(element).find('p.coin-item-symbol').text();
                $(element).find('p[font-weight="semibold"]').each((index, element) => {
                    currencies.push({
                        name: $(element).text(),
                        url,
                        symbol
                    });
                });
                symbol = $(element).find('span.crypto-symbol').text();
                $(element).find('span:odd').each((index, element) => {
                    currencies.push({
                        name: $(element).text(),
                        url,
                        symbol
                    });                
                });
            }
        });
    });

    return currencies;
};

const currencyPage = async ({url, timeStart, timeEnd}) => {
    const {data} = await axios.get(`https://coinmarketcap.com${url}`);
    const $ = cheerio.load(data);
    const id = $('.BaseChip_labelWrapper__lZ4ii').text().trim();
    const res = await axios.get(`https://api.coinmarketcap.com/data-api/v3.1/cryptocurrency/historical?id=${id}&timeStart=${timeStart}&timeEnd=${timeEnd}&interval=1h`);
    return res.data;
};

export {
    homePage,
    currencyPage
};