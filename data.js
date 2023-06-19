var chartOffset = 0;
var pieSlice;

const ctx = document.getElementById("pieChart");
const myChart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "China",
      "United States",
      "India",
      "Russia",
      "Japan",
      "Iran",
      "Germany",
      "Saudi Arabia",
      "Indonesia",
      "South Korea",
      "Other Countries",
    ],
    datasets: [
      {
        label: "CO2 Emission Data",
        data: [
          "30.903",
          "13.488",
          "7.299",
          "4.729",
          "2.875",
          "2.017",
          "1.818",
          "1.811",
          "1.668",
          "1.66",
          "31.732",
        ],
      },
    ],
  },
  options: {
    hoverOffset: 40,
    layout: {
      padding: 40,
    },
    plugins: {
      title: {
        display: true,
        text: "10 Countries emitting the most CO2 (data for 2021)",
        font: {
          size: 20,
        },
      },
    },
  },
});

function clickChartSlice(click) {
  const slice = myChart.getElementsAtEventForMode(
    click,
    "nearest",
    { intersect: true },
    true
  );

  if (slice.length) {
    pieSlice = slice[0]["index"]; // get the index of the pie slice clicked on.
    var info = document.getElementById("selected");
    var titleInfo = document.getElementById("titleOfSelected");
    if (pieSlice == 0) {
      titleInfo.innerHTML = "China";
      info.innerHTML =
        "Greenhouse gas emissions by China are the largest of any country in the world both in production and consumption terms, and stem mainly from coal burning in China, including coal-fired power stations, coal mining, and blast furnaces producing iron and steel. When measuring production-based emissions, China emitted over 14 gigatonnes (Gt) CO2eq of greenhouse gases in 2019, 27% of the world total. When measuring in consumption-based terms, which adds emissions associated with imported goods and extracts those associated with exported goods, China accounts for 13 gigatonnes (Gt) or 25% of global emissions.";
    } else if (pieSlice == 1) {
      titleInfo.innerHTML = "United States";
      info.innerHTML =
        "Today, the US is the second largest emitter of greenhouse gases, but over the course of history it has cumulatively produced more CO2 than any other nation. Its citizens have carbon footprints that are roughly three times the global average. CO2 emissions in the US are dominated by the burning of fossil fuels (coal, oil, gas) for energy production, and industrial production of materials such as cement. Climate change is a highly divisive issue in US politics and comprehensive government action has routinely been blocked by members of the Republican Party.";
    } else if (pieSlice == 2) {
      titleInfo.innerHTML = "India";
      info.innerHTML =
        "India is the world’s third largest emitter of greenhouse gases (GHGs), after China and the US. Its rapid increase in electricity use in recent decades has been fueled largely by coal. However, it is now quickly expanding its renewable power, especially solar. India accounts for 7.3% of global emission. Although the per-capita (per-person) emissions remain below the global average, India has confirmed the Paris  agreement and pledged a 33-35% reduction in emissions intensity by 2030, compared to 2005 values.";
    } else if (pieSlice == 3) {
      titleInfo.innerHTML = "Russia";
      info.innerHTML =
        "Russia is currently the fourth largest greenhouse gas emitter behind China, the US and India. In addition, it is the world’s third-highest carbon emitter in history, responsible for some 7% of global cumulative CO2. It has the world’s seventh-largest fleet of coal-fired power stations but a low wind and solar capacity, this is balanced by a large nuclear fleet and extensive hydropower. The nation relies heavily on revenues from oil and gas exports, the CO2 emissions are dominated by extracting and burning of fossil fuels.";
    } else if (pieSlice == 4) {
      titleInfo.innerHTML = "Japan";
      info.innerHTML =
        "Japan is the world’s third largest economy and fourth largest emitter of greenhouse gases (GHGs). Its plans for decarbonisation were significantly set back after the 2011 Fukushima nuclear disaster which led it to move away from nuclear power and expand the use of fossil fuels. Japan’s government now plans to increase both renewable and nuclear power. However, it also intends to build significant numbers of new coal power plants. Japan has pledged a 26% reduction in GHG emissions below 2013 levels by 2030.";
    } else if (pieSlice == 5) {
      titleInfo.innerHTML = "Iran";
      info.innerHTML =
        "Iran was the world’s eighth largest emitter of greenhouse gases in 2015. It is a resource-rich nation with enormous reserves of oil and gas, as well as considerable renewable energy potential. However, sanctions have significantly affected Iran’s economy, disrupting oil exports and slowing its transition to a cleaner energy system. While Iranian leaders have said they view climate change as a serious threat, the nation remains one of only a handful yet to ratify the Paris Agreement.";
    } else if (pieSlice == 6) {
      titleInfo.innerHTML = "Germany";
      info.innerHTML =
        "Germany is the seventh largest emitter of greenhouse gas with 762 million tonnes of greenhouse gases emitted in 2021. In its climate action, Germany is phasing out the use of coal to generate electricity, and putting its faith in renewables – this move to put Germany's energy mix on a more sustainable route. Germany aims to become greenhouse gas neutral by 2045. It has set the preliminary targets of cutting emissions by at least 65 percent by 2030 compared to 1990 levels, and 88 percent by 2040.";
    } else if (pieSlice == 7) {
      titleInfo.innerHTML = "Saudi Arabia";
      info.innerHTML =
        "Saudi Arabia emitted 586.4 million metric tons of carbon dioxide (MtCO₂) from fossil fuel and industrial purposes in 2021. The country is one of the largest producers of CO₂ emissions per capita worldwide, at roughly 19 metric tons per person. Saudi Arabia is committed to contributing to cutting global methane emissions by 30% by 2030 as part of its ambition to deliver a cleaner, greener future. ";
    } else if (pieSlice == 8) {
      titleInfo.innerHTML = "Indonesia";
      info.innerHTML =
        "Indonesia was the world’s fourth largest emitter of greenhouse gases in 2015. It is the 16th biggest economy and the largest in southeast Asia. Its emissions stem from deforestation and peatland megafires and, to a lesser extent, the burning of fossil fuels for energy. The country recently overtook Australia again to become the world’s largest exporter of thermal coal. The current government has pledged to cut emissions by 29-41% by 2030, compared to a “business as usual” scenario.";
    } else if (pieSlice == 9) {
      titleInfo.innerHTML = "South Korea";
      info.innerHTML =
        "South Korean governments have championed the concept of “green growth” as a way of building the nation’s economy while also benefiting the environment. However, the reality is that the nation’s economic success over the past few decades has been driven primarily by energy-intensive industries, which in turn are fuelled largely by coal. Nuclear is the only significant low-carbon energy source in South Korea, with renewables barely making a dent in its power supply.";
    }
  }
}

ctx.onclick = clickChartSlice;
