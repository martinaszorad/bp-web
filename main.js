import noUiSlider from 'nouislider/dist/nouislider.js'
var slider = document.getElementById('slider');
var valuesForSlider = Array.from(new Array(23), (x, i) => i + 1991);
var field = 'hrebla'
var year = 1991

var format = {
    to: function(value) {
        return valuesForSlider[Math.round(value)];
    },
    from: function (value) {
        return valuesForSlider.indexOf(Number(value));
    }
};

noUiSlider.create(slider, {
    start: [year],
    step: 1,
    range: { min: 0, max: valuesForSlider.length - 1 },
    tooltips: false,
    format: format,
    pips: {
      mode: 'count',
      format: format,
      stepped: true,
      values: 23
    }
});

function getImageUrl(field, year) {
    return new URL(`./img/${field}_${year}.jpg`, import.meta.url).href
}

function updateImage() {
    document.getElementById('map').src = getImageUrl(field, year)
}

function updateYear(values, handle, unencoded, tap, positions) {
    year = values[0] 
    updateImage()
}

function updateField(value, text, $choice) {
    field = value
    updateImage()
}

slider.noUiSlider.on('update.one', updateYear);

$('#field-choice')
  .dropdown({
    values: [
      {
        name: 'Hřebla',
        value: 'hrebla',
        selected: true,
      },
      {
        name: 'Lulečské Díly',
        value: 'lul',
      },
      {
        name: 'Pod Bytovkama',
        value: 'nasyp',
      },
      {
        name: 'Pod Silnicí Komořany',
        value: 'cesta',
      },
      {
        name: 'Kroužecko',
        value: 'kruzecko',
      },
      {
        name: 'Pod Silnicí Lysovice',
        value: 'lysovice',
      },
      {
        name: 'Volkramy od Pratlosu',
        value: 'orchard',
      },
      {
        name: 'Peitlovo',
        value: 'peitlovo',
      },
      {
        name: 'Za Školou Tučapy',
        value: 'za_skolou',
      }
    ],
    action: 'activate',
    onChange: updateField
  })
;

updateImage()