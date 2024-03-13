
function Contests() {

    let euclidCutoffTable = <table className='cutoffsTable' style={{ display: 'none' }}>
        <thead>
            <tr><th> Year </th><th> Certificate <br /> (Top 25%) </th><th> Honour Roll <br /> (&asymp; Top 2.5%) </th></tr>
        </thead>
        <tbody>
            <tr><td> 2022 </td><td> 68 </td><td> 85 </td></tr>
            <tr><td> 2021 </td><td> 69 </td><td> 86 </td></tr>
            <tr><td colSpan="3"> 2020: cancelled due to Covid </td></tr>
            <tr><td> 2019 </td><td> 68 </td><td> 83 </td></tr>
            <tr><td> 2018 </td><td> 64 </td><td> 79 </td></tr>
            <tr><td> 2017 </td><td> 64 </td><td> 79 </td></tr>
            <tr><td> 2016 </td><td> 65 </td><td> 80 </td></tr>
            <tr><td> 2015 </td><td> 52 </td><td> 72 </td></tr>
            <tr><td> 2014 </td><td> 60 </td><td> 79 </td></tr>
            <tr><td> 2013 </td><td> 60 </td><td> 79 </td></tr>
            <tr><td> 2012 </td><td> 56 </td><td> 78 </td></tr>
            <tr><td> 2011 </td><td> 59 </td><td> 80 </td></tr>
            <tr><td> 2010 </td><td> 60 </td><td> 81 </td></tr>
            <tr><td> 2009 </td><td> 57 </td><td> 80 </td></tr>
            <tr><td> 2008 </td><td> 56 </td><td> 83 </td></tr>
            <tr><td> 2007 </td><td> 58 </td><td> 85 </td></tr>
            <tr><td> 2006 </td><td> 63 </td><td> 83 </td></tr>
            <tr><td> 2005 </td><td> 59 </td><td> 76 </td></tr>
            <tr><td> 2004 </td><td> 56 </td><td> 80 </td></tr>
            <tr><td> 2003 </td><td> 54 </td><td> 83 </td></tr>
            <tr><td> 2002 </td><td> 51 </td><td> 79 </td></tr>
            <tr><td> 2001 </td><td> Nodata </td><td> Nodata </td></tr>
            <tr><td> 2000 </td><td> Nodata </td><td> Nodata </td></tr>
            <tr><td> 1999 </td><td> Nodata </td><td> Nodata </td></tr>
            <tr><td> 1998 </td><td> Nodata </td><td> Nodata </td></tr>
        </tbody>
    </table>;
    let CSMCCutoffTable = <table className='cutoffsTable' style={{ display: 'none' }}>
        <thead>
            <tr><th> Year </th><th> Certificate <br /> (Top 25%) </th><th> Honour Roll <br /> (&asymp; Top 2.5%) </th></tr>
        </thead>
        <tbody>
            <tr><td> 2022 </td><td> 34 </td><td> 42 </td></tr>
            <tr><td> 2021 </td><td> 32 </td><td> 46 </td></tr>
            <tr><td> 2020 </td><td> 42 </td><td> 52 </td></tr>
            <tr><td> 2019 </td><td> 37 </td><td> 49 </td></tr>
            <tr><td> 2018 </td><td> 35 </td><td> 44 </td></tr>
            <tr><td> 2017 </td><td> 39 </td><td> 45 </td></tr>
            <tr><td> 2016 </td><td> 38 </td><td> 45 </td></tr>
            <tr><td> 2015 </td><td> 39 </td><td> 46 </td></tr>
            <tr><td> 2014 </td><td> 39 </td><td> 47 </td></tr>
            <tr><td> 2013 </td><td> 43 </td><td> 51 </td></tr>
            <tr><td> 2012 </td><td> 42 </td><td> 48 </td></tr>
            <tr><td> 2011 </td><td> 39 </td><td> 48 </td></tr>
        </tbody>
    </table>;
    let CIMCCutoffTable = <table className='cutoffsTable' style={{ display: 'none' }}>
        <thead>
            <tr><th> Year </th><th> Certificate <br /> (Top 25%) </th><th> Honour Roll <br /> (&asymp; Top 2.5%) </th></tr>
        </thead>
        <tbody>
            <tr><td> 2022 </td><td> 38 </td><td> 47 </td></tr>
            <tr><td> 2021 </td><td> 37 </td><td> 47 </td></tr>
            <tr><td> 2020 </td><td> 41 </td><td> 49 </td></tr>
            <tr><td> 2019 </td><td> 36 </td><td> 47 </td></tr>
            <tr><td> 2018 </td><td> 40 </td><td> 47 </td></tr>
            <tr><td> 2017 </td><td> 43 </td><td> 52 </td></tr>
            <tr><td> 2016 </td><td> 40 </td><td> 47 </td></tr>
            <tr><td> 2015 </td><td> 42 </td><td> 52 </td></tr>
            <tr><td> 2014 </td><td> 43 </td><td> 49 </td></tr>
            <tr><td> 2013 </td><td> 45 </td><td> 52 </td></tr>
            <tr><td> 2012 </td><td> 40 </td><td> 52 </td></tr>
            <tr><td> 2011 </td><td> 40 </td><td> 48 </td></tr>
        </tbody>
    </table>;
    let COMCCutoffTable = <table className='cutoffsTable' style={{ display: 'none' }}>
        <thead>
            <tr>
                <th> Year </th>
                <th> Honours <br /> (Top 50%) </th>
                <th> Distinction <br /> (Top 25%) </th>
                <th> Repechage <br /> (Top 125) </th>
                <th> CMO <br /> (Top 50) </th>
            </tr>
        </thead>
        <tbody>
            <tr><td> 2022 </td><td> 28 </td><td> 41 </td><td> 63.5 </td><td> 69 </td></tr>
            <tr><td> 2021 </td><td> 29 </td><td> NA </td><td> 62 </td><td> 68 </td></tr>
            <tr><td> 2020 </td><td> 33 </td><td> 44 </td><td> 60.5 </td><td> 66 </td></tr>
            <tr><td> 2019 </td><td> 32 </td><td> 44 </td><td> 61 </td><td> 66.5 </td></tr>
            <tr><td> 2018 </td><td> 23.5 </td><td> 33 </td><td> 52 </td><td> 61 </td></tr>
            <tr><td> 2017 </td><td> 36.5 </td><td> NA </td><td> 57.5 </td><td> 64 </td></tr>
            <tr><td> 2016 </td><td> 33 </td><td> NA </td><td> 61 </td><td> 69 </td></tr>
            <tr><td> 2015 </td><td> 32 </td><td> NA </td><td> 55 </td><td> 66 </td></tr>
            <tr><td> 2014 </td><td> 38 </td><td> NA </td><td> 62 </td><td> 69 </td></tr>
            <tr><td> 2013 </td><td> 26 </td><td> NA </td><td> 53 </td><td> 60 </td></tr>
            <tr><td> 2012 </td><td> 31 </td><td> 40 </td><td> 53 </td><td> 57 </td></tr>
            <tr><td> 2011 </td><td> 36 </td><td> 48 </td><td> 66 </td><td> 70 </td></tr>
            <tr><td> 2010 </td><td> 44 </td><td> 51 </td><td> 67 </td><td> 71 </td></tr>
            <tr><td> 2009 </td><td> 39 </td><td> 49 </td><td> 66 </td><td> 70 </td></tr>
            <tr><td> 2008 </td><td> 45 </td><td> 54 </td><td> 68 </td><td> 72 </td></tr>
            <tr><td> 2007 </td><td> 41 </td><td> 53 </td><td> 68 </td><td> 72 </td></tr>
            <tr><td> 2006 </td><td> 30 </td><td> 40 </td><td> 62 </td><td> 68 </td></tr>
            <tr><td> 2005 </td><td> 41 </td><td> 49 </td><td> 65 </td><td> 70 </td></tr>
            <tr><td> 2004 </td><td> 36 </td><td> 48 </td><td> 64 </td><td> 68 </td></tr>
            <tr><td> 2003 </td><td> 35 </td><td> 43 </td><td> 59 </td><td> 64 </td></tr>
            <tr><td> 2002 </td><td> 39 </td><td> 47 </td><td> 63 </td><td> 68 </td></tr>
            <tr><td> 2001 </td><td> 44 </td><td> 55 </td><td> 70 </td><td> 72 </td></tr>
            <tr><td> 2000 </td><td> 34 </td><td> 47 </td><td> 65 </td><td> 70 </td></tr>
            <tr><td> 1999 </td><td> NA </td><td> NA </td><td> &asymp; 61 </td><td> &asymp; 68 </td></tr>
            <tr><td> 1998 </td><td> NA </td><td> NA </td><td> &asymp; 57 </td><td> &asymp; 62 </td></tr>
            <tr><td> 1997 </td><td> NA </td><td> NA </td><td> NA </td><td> NA </td></tr>
            <tr><td> 1996 </td><td> &asymp; 23 </td><td> &asymp; 31 </td><td> 43 </td><td> 49 </td></tr>
        </tbody>
    </table>;
    let AMC10ACutoffTable = <table className='cutoffsTable' style={{ display: 'none' }}>
        <thead>
            <tr>
                <th> Year </th>
                <th> AIME <br /> floor </th>
                <th> Distinction <br /> (Top 5%) </th>
                <th> Distinguished <br /> Honor Roll <br /> (Top 1%) </th>
            </tr>
        </thead>
        <tbody>
            <tr><td> 2022 </td><td> 93 </td><td> 100.5 </td><td> 121.5 </td></tr>
            <tr><td> 2021Fall </td><td> 96 </td><td> 100.5 </td><td> 117 </td></tr>
            <tr><td> 2021Spring </td><td> 103.5 </td><td> 112.5 </td><td> 132 </td></tr>
            <tr><td> 2020 </td><td> 103.5 </td><td> 105 </td><td> 124.5 </td></tr>
            <tr><td> 2019 </td><td> 96 </td><td> 103.5 </td><td> 123 </td></tr>
            <tr><td> 2018 </td><td> 111 </td><td> 100.5 </td><td> 127.5 </td></tr>
            <tr><td> 2017 </td><td> 112.5 </td><td> 112.5 </td><td> 127.5 </td></tr>
            <tr><td> 2016 </td><td> 110 </td><td> NA </td><td> 120 </td></tr>
            <tr><td> 2015 </td><td> 106.5 </td><td> NA </td><td> 115.5 </td></tr>
            <tr><td> 2014 </td><td> 120 </td><td> NA </td><td> 132 </td></tr>
            <tr><td> 2013 </td><td> 108 </td><td> NA </td><td> 117 </td></tr>
            <tr><td> 2012 </td><td> 115.5 </td><td> NA </td><td> 121.5 </td></tr>
            <tr><td> 2011 </td><td> 117 </td><td> 117 </td><td> 129 </td></tr>
            <tr><td> 2010 </td><td> 118.5 </td><td> 118.5 </td><td> 121.5 </td></tr>
            <tr><td> 2009 </td><td> 120 </td><td> 120 </td><td> 133.5 </td></tr>
            <tr><td> 2008 </td><td> 117 </td><td> 100.5 </td><td> 127.5 </td></tr>
        </tbody>
    </table>;
    let AMC10BCutoffTable = <table className='cutoffsTable' style={{ display: 'none' }}>
        <thead>
            <tr>
                <th> Year </th>
                <th> AIME <br /> floor </th>
                <th> Distinction <br /> (Top 5%) </th>
                <th> Distinguished <br /> Honor Roll <br /> (Top 1%) </th>
            </tr>
        </thead>
        <tbody>
            <tr><td> 2022 </td><td> 94.5 </td><td> 100.5 </td><td> 114 </td></tr>
            <tr><td> 2021Fall </td><td> 96 </td><td> 100.5 </td><td> 120 </td></tr>
            <tr><td> 2021Spring </td><td> 102 </td><td> 108 </td><td> 126 </td></tr>
            <tr><td> 2020 </td><td> 102 </td><td> 103.5 </td><td> 120 </td></tr>
            <tr><td> 2019 </td><td> 102 </td><td> 108 </td><td> 121.5 </td></tr>
            <tr><td> 2018 </td><td> 108 </td><td> 97.5 </td><td> 123 </td></tr>
            <tr><td> 2017 </td><td> 120 </td><td> 120 </td><td> 136.5 </td></tr>
            <tr><td> 2016 </td><td> 110 </td><td> NA </td><td> 124.5 </td></tr>
            <tr><td> 2015 </td><td> 120 </td><td> NA </td><td> 132 </td></tr>
            <tr><td> 2014 </td><td> 120 </td><td> NA </td><td> 132 </td></tr>
            <tr><td> 2013 </td><td> 120 </td><td> NA </td><td> 129 </td></tr>
            <tr><td> 2012 </td><td> 120 </td><td> NA </td><td> 133.5 </td></tr>
            <tr><td> 2011 </td><td> 117 </td><td> 117 </td><td> 133.5 </td></tr>
            <tr><td> 2010 </td><td> 118.5 </td><td> 118.5 </td><td> 124.5 </td></tr>
            <tr><td> 2009 </td><td> 120 </td><td> 124.5 </td><td> 141 </td></tr>
            <tr><td> 2008 </td><td> 120 </td><td> 100.5 </td><td> 127.5 </td></tr>
        </tbody>
    </table>;
    let AMC12ACutoffTable = <table className='cutoffsTable' style={{ display: 'none' }}>
        <thead>
            <tr>
                <th> Year </th>
                <th> AIME <br /> floor </th>
                <th> Distinction <br /> (Top 5%) </th>
                <th> Distinguished <br /> Honor Roll <br /> (Top 1%) </th>
            </tr>
        </thead>
        <tbody>
            <tr><td> 2022 </td><td> 85.5 </td><td> 106.5 </td><td> 126 </td></tr>
            <tr><td> 2021Fall </td><td> 91.5 </td><td> 111 </td><td> 130.5 </td></tr>
            <tr><td> 2021Spring </td><td> 93 </td><td> 114 </td><td> 133.5 </td></tr>
            <tr><td> 2020 </td><td> 87 </td><td> 100.5 </td><td> 123 </td></tr>
            <tr><td> 2019 </td><td> 84 </td><td> NA </td><td> 121.5 </td></tr>
            <tr><td> 2018 </td><td> 93 </td><td> NA </td><td> 120 </td></tr>
            <tr><td> 2017 </td><td> 96 </td><td> 96 </td><td> 115.5 </td></tr>
            <tr><td> 2016 </td><td> 93 </td><td> NA </td><td> 111 </td></tr>
            <tr><td> 2015 </td><td> 99 </td><td> NA </td><td> 117 </td></tr>
            <tr><td> 2014 </td><td> 93 </td><td> NA </td><td> 109.5 </td></tr>
            <tr><td> 2013 </td><td> 88.5 </td><td> NA </td><td> 106.5 </td></tr>
            <tr><td> 2012 </td><td> 94.5 </td><td> NA </td><td> 109.5 </td></tr>
            <tr><td> 2011 </td><td> 93 </td><td> 92 </td><td> 112.5 </td></tr>
            <tr><td> 2010 </td><td> 88.5 </td><td> 88.5 </td><td> 108 </td></tr>
            <tr><td> 2009 </td><td> 97.5 </td><td> 100.5 </td><td> 117 </td></tr>
            <tr><td> 2008 </td><td> 97.5 </td><td> 97.5 </td><td> 120 </td></tr>
        </tbody>
    </table>;
    let AMC12BCutoffTable = <table className='cutoffsTable' style={{ display: 'none' }}>
        <thead>
            <tr>
                <th> Year </th>
                <th> AIME <br /> floor </th>
                <th> Distinction <br /> (Top 5%) </th>
                <th> Distinguished <br /> Honor Roll <br /> (Top 1%) </th>
            </tr>
        </thead>
        <tbody>
            <tr><td> 2022 </td><td> 81 </td><td> 105 </td><td> 129 </td></tr>
            <tr><td> 2021Fall </td><td> 84 </td><td> 103.5 </td><td> 130.5 </td></tr>
            <tr><td> 2021Spring </td><td> 91.5 </td><td> 109.5 </td><td> 132 </td></tr>
            <tr><td> 2020 </td><td> 87 </td><td> 97.5 </td><td> 120 </td></tr>
            <tr><td> 2019 </td><td> 94.5 </td><td> NA </td><td> 123 </td></tr>
            <tr><td> 2018 </td><td> 99 </td><td> NA </td><td> 126 </td></tr>
            <tr><td> 2017 </td><td> 100 </td><td> 100.5 </td><td> 129 </td></tr>
            <tr><td> 2016 </td><td> 100.5 </td><td> NA </td><td> 127.5 </td></tr>
            <tr><td> 2015 </td><td> 100.5 </td><td> NA </td><td> 126 </td></tr>
            <tr><td> 2014 </td><td> 100.5 </td><td> NA </td><td> 121.5 </td></tr>
            <tr><td> 2013 </td><td> 93 </td><td> NA </td><td> 108 </td></tr>
            <tr><td> 2012 </td><td> 99 </td><td> NA </td><td> 114 </td></tr>
            <tr><td> 2011 </td><td> 97.5 </td><td> 92 </td><td> 121.5 </td></tr>
            <tr><td> 2010 </td><td> 88.5 </td><td> 88.5 </td><td> 108 </td></tr>
            <tr><td> 2009 </td><td> 100 </td><td> 108 </td><td> 124.5 </td></tr>
            <tr><td> 2008 </td><td> 97.5 </td><td> 97.5 </td><td> 120 </td></tr>
        </tbody>
    </table>;
    let Gauss8AnswerKeys = [
        { id: 2023, answers: 'BABDC ABADC ABDDD ECDCB DECBA' },
        { id: 2022, answers: 'EDCDC BDDBE CBCAB CBCCA EDEBB' },
        { id: 2021, answers: 'CBBBB CDBCA CDEBD EDAAB EAADD' },
        { id: 2020, answers: 'DEEEA DCBAE AECDB CCCDB BADAD' },
        { id: 2019, answers: 'EBADE ECCEA CACDD BBDAE ABEED' },
        { id: 2018, answers: 'CDBCE ABDCB ECABB CDEAD CBEDB' },
        { id: 2017, answers: 'CAEBB BADDB DDCCE BDEEB CDCDE' },
        { id: 2016, answers: 'ABCCB DAACC EEDAA BBEDA CDDBB' },
        { id: 2015, answers: 'AEEBE BBAEC CCBAD DCCDB EBEAE' },
        { id: 2014, answers: 'DEBDD ACBAD EEAAB BBDDC EEBBD' },
        { id: 2013, answers: 'DDCBB CCAEB EACDC EDBEE BACBD' },
        { id: 2012, answers: 'ABDAB EACDB AECBD DBBCE DCCED' },
        { id: 2011, answers: 'DCEDA BBEAD DACEC CBDDB ACBDE' },
        { id: 2010, answers: 'ACBAD CBDEE EDBCB CEBAD ABDAB' },
        { id: 2009, answers: 'BDCBC DEAAA CDAEB DBEBE BDABB' },
        { id: 2008, answers: 'CDABA EADCE DDBAB CADCD ABDEE' },
        { id: 2007, answers: 'EBDCA BAEBC EDBCA ADEEB AAECD' },
        { id: 2006, answers: 'EBABB CACAE CCAED ADACD DBABC' },
        { id: 2005, answers: 'BACCE CDDBD EEAEB CECAA EDCBA' },
        { id: 2004, answers: 'BCBAD ADEDE CDBAB DCBAE EACBB' },
        { id: 2003, answers: 'BAECA DBEEA EBCCB AADAD DDDCC' },
        { id: 2002, answers: 'EBCED BECAD EDEAC AABED DBEAC' },
        { id: 2001, answers: 'ABAEC DBADE DBDCC EACEA CAEBD' },
        { id: 2000, answers: 'BBDEA BACDB CCEAD DCBCE DAEBA' },
        { id: 1999, answers: 'AEDCB ABBDA DAEDE CBCBD BEEAC' },
        { id: 1998, answers: 'EADEA CBDAC DBCAE CBDEB EDBCA' }
    ];
    let Gauss8Years = [];
    for (let i = 2023; i >=1998; i--) {
        Gauss8Years.push(<option value={i} key={i}>{i}</option>);
    }

    return (
        <>

            <h1 >Math Contests Timeline</h1>
            {/*<h1 style={{ textAlign: 'center', marginBottom: '10px', fontSize: 'max(1vw, 14px)' }}>Click below to view</h1>*/}

            <button className="collapsible" id='seven' onClick={
                () => {
                    var me = document.getElementById('seven')
                    me.classList.toggle('cactive')
                    var content = me.nextElementSibling;
                    if (content.style.maxHeight) {
                        content.style.maxHeight = null;
                    } else {
                        content.style.maxHeight = "10000px";
                    }
                }
            }>Grade 7</button>
            <div className="contestContent"> {/* Grade 7 */ }

                <div className='container'>
                    <h3>
                        <span><i className="bi bi-thermometer-half"></i>September: </span>
                        Start of G7<br />

                        <a href='https://cariboutests.com/'>Caribou (year-round)</a><br />

                        <span><i className="bi bi-thermometer-low"></i>November: </span>
                        <a href='https://www.cemc.uwaterloo.ca/contests/bcc.html'>BCC 7/8</a><br />

                        <span><i className="bi bi-thermometer-low"></i>November: </span>
                        <a href='https://cms.math.ca/competitions/cjmc/'>CJMC</a> |
                        <a href='https://cms.math.ca/competitions/cjmc/cjmc2022/getting-ready/'>Papers</a> <br />

                        <span><i className="bi bi-thermometer-snow"></i>January: </span>
                        New Year<br />

                        <span><i className="bi bi-thermometer-snow"></i>January: </span>
                        <a href='https://www.maa.org/math-competitions/amc-8'>AMC 8</a> |
                        <a href='https://artofproblemsolving.com/wiki/index.php/AMC_8_Problems_and_Solutions'>Papers</a> <br />

                        <span><i className="bi bi-thermometer-half"></i>March: </span>
                        <a href='https://mathkangaroo.ca/en'>Kangaroo</a> |
                        <a href='https://mathkangaroo.ca/samples/en'>Papers</a> <br />

                        <span><i className="bi bi-thermometer-sun"></i>May: </span>
                        <a href='https://www.cemc.uwaterloo.ca/contests/gauss.html'>Gauss 7</a> |
                        <a href='https://www.cemc.uwaterloo.ca/contests/past_contests.html#gauss'>Papers</a> <br />

                        <span><i className="bi bi-thermometer-sun"></i>June: </span>
                        End of G7
                    </h3>
                </div>


            </div>

            <button className="collapsible" id='eight' onClick={
                () => {
                    var me = document.getElementById('eight')
                    me.classList.toggle('cactive')
                    var content = me.nextElementSibling;
                    if (content.style.maxHeight) {
                        content.style.maxHeight = null;
                    } else {
                        content.style.maxHeight = "10000px";
                    }
                }
            }>Grade 8</button>
            <div className="contestContent">  {/* Grade 8 */}

                <div className='container'>
                    <h3>
                        <span><i className="bi bi-thermometer-half"></i>September: </span>
                        Start of G8<br />

                        <a href='https://cariboutests.com/'>Caribou (year-round)</a><br />

                        <span><i className="bi bi-thermometer-low"></i>November: </span>
                        <a href='https://www.cemc.uwaterloo.ca/contests/bcc.html'>BCC 7/8</a><br />

                        <span><i className="bi bi-thermometer-low"></i>November: </span>
                        <a href='https://cms.math.ca/competitions/cjmc/'>CJMC</a> |
                        <a href='https://cms.math.ca/competitions/cjmc/cjmc2022/getting-ready/'>Papers</a> <br />

                        <span><i className="bi bi-thermometer-snow"></i>January: </span>
                        New Year<br />

                        <span><i className="bi bi-thermometer-snow"></i>January: </span>
                        <a href='https://www.maa.org/math-competitions/amc-8'>AMC 8</a> |
                        <a href='https://artofproblemsolving.com/wiki/index.php/AMC_8_Problems_and_Solutions'>Papers</a> <br />

                        <span><i className="bi bi-thermometer-half"></i>March: </span>
                        <a href='https://mathkangaroo.ca/en'>Kangaroo</a> |
                        <a href='https://mathkangaroo.ca/samples/en'>Papers</a> <br />

                        <span><i className="bi bi-thermometer-sun"></i>May: </span>
                        <a href='https://www.cemc.uwaterloo.ca/contests/gauss.html'>Gauss 8</a> |
                        <a href='https://www.cemc.uwaterloo.ca/contests/past_contests.html#gauss'>Papers</a> |

                        <select id="YearOfGauss8AnswerKey" onChange={
                            () => { 
                                let me = document.getElementById('YearOfGauss8AnswerKey')
                                if (me.value === 'AnswerKeys') {
                                    me.nextElementSibling.nextElementSibling.innerHTML = '';
                                } else {
                                    let keys = Gauss8AnswerKeys.find(e => e.id === parseInt(me.value)).answers;
                                    me.nextElementSibling.nextElementSibling.innerHTML = keys;
                                }
                            }
                        }>
                            <option value="AnswerKeys">Answer Keys</option>
                            {Gauss8Years}
                        </select> <br />

                        <p id="KeysOfGauss8"></p>

                        <span><i className="bi bi-thermometer-sun"></i>June: </span>
                        End of G8
                    </h3>
                </div>
            </div>

            <button className="collapsible" id='nine' onClick={
                () => {
                    var me = document.getElementById('nine')
                    me.classList.toggle('cactive')
                    var content = me.nextElementSibling;
                    if (content.style.maxHeight) {
                        content.style.maxHeight = null;
                    } else {
                        content.style.maxHeight = "10000px";
                    }
                }
            }>Grade 9</button>
            <div className="contestContent">  {/* Grade 9 */}

                <div className='container'>
                    <h3>
                        <span><i className="bi bi-thermometer-half"></i>September: </span>
                        Start of G9<br />

                        <a href='https://cariboutests.com/'>Caribou (year-round)</a><br />

                        <span><i className="bi bi-thermometer-low"></i>November: </span>
                        <a href='https://www.cemc.uwaterloo.ca/contests/bcc.html'>BCC 9/10</a><br />

                        <span><i className="bi bi-thermometer-low"></i>November: </span>
                        <a href='https://www.maa.org/math-competitions/amc-1012'>AMC 10</a> |
                        <a href='https://artofproblemsolving.com/wiki/index.php/AMC_10_Problems_and_Solutions'>Papers</a> 
                        <br />
                        <button className='cutoffsButton'
                            onClick={e => {
                                let theTable = e.target.nextElementSibling;
                                while (theTable.tagName !== 'TABLE') { theTable = theTable.nextElementSibling }
                                if (theTable.style.display === 'none') { theTable.style.display = 'block' } else { theTable.style.display = 'none' };
                            }}>Paper A Cutoffs</button>
                        {AMC10ACutoffTable} | 
                        <button className='cutoffsButton'
                            onClick={e => {
                                let theTable = e.target.nextElementSibling;
                                while (theTable.tagName !== 'TABLE') { theTable = theTable.nextElementSibling }
                                if (theTable.style.display === 'none') { theTable.style.display = 'block' } else { theTable.style.display = 'none' };
                            }}>Paper B Cutoffs</button><br />
                        {AMC10BCutoffTable}

                        <span><i className="bi bi-thermometer-low"></i>November: </span>
                        <a href='https://www.cemc.uwaterloo.ca/contests/csimc.html'>CIMC</a> |
                        <a href='https://www.cemc.uwaterloo.ca/contests/past_contests.html#csimc'>Papers</a> |
                        <button className='cutoffsButton'
                            onClick={e => {
                                let theTable = e.target.nextElementSibling;
                                while (theTable.tagName !== 'TABLE') { theTable = theTable.nextElementSibling }
                                if (theTable.style.display === 'none') { theTable.style.display = 'block' } else { theTable.style.display = 'none' };
                            }}>Cutoffs</button><br />
                        {CIMCCutoffTable}

                        <span><i className="bi bi-thermometer-snow"></i>January: </span>
                        New Year<br />

                        <span><i className="bi bi-thermometer-snow"></i>February: </span>
                        <a href='https://www.cemc.uwaterloo.ca/contests/pcf.html'>Pascal</a> |  
                        <a href='https://www.cemc.uwaterloo.ca/contests/past_contests.html#pcf'>Papers</a> |
                        <button className='cutoffsButton'
                            onClick={() => {
                                let x = document.getElementById("PascalCutoff")
                                if (x.style.display === 'none') { x.style.display = 'block' } else { x.style.display = 'none' };
                            }}>Cutoffs</button><br />
                        <table id="PascalCutoff" className='cutoffsTable' style={{display:'none'}}>
                            <thead>
                                <tr><th> Year </th><th> Certificate <br /> (Top 25%) </th><th> Honour Roll <br /> (&asymp; Top 1.5%) </th></tr>
                            </thead>
                            <tbody>
                                <tr><td> 2023 </td><td> 104 </td><td> 134 </td></tr>
                                <tr><td> 2022 </td><td> 102 </td><td> 133 </td></tr>
                                <tr><td> 2021 </td><td> 118 </td><td> 138 </td></tr>
                                <tr><td> 2020 </td><td> 114 </td><td> 136 </td></tr>
                                <tr><td> 2019 </td><td> 104 </td><td> 130 </td></tr>
                                <tr><td> 2018 </td><td> 105 </td><td> 134 </td></tr>
                                <tr><td> 2017 </td><td> 112 </td><td> 134 </td></tr>
                                <tr><td> 2016 </td><td> 101 </td><td> 132 </td></tr>
                                <tr><td> 2015 </td><td> 116 </td><td> 136 </td></tr>
                                <tr><td> 2014 </td><td> 104 </td><td> 129 </td></tr>
                                <tr><td> 2013 </td><td> 112 </td><td> 135 </td></tr>
                                <tr><td> 2012 </td><td> 111 </td><td> 136 </td></tr>
                                <tr><td> 2011 </td><td> 104 </td><td> 132 </td></tr>
                                <tr><td> 2010 </td><td> 107 </td><td> 134 </td></tr>
                                <tr><td> 2009 </td><td> 103 </td><td> 132 </td></tr>
                                <tr><td> 2008 </td><td> 103 </td><td> 135 </td></tr>
                                <tr><td> 2007 </td><td> 110 </td><td> 134 </td></tr>
                                <tr><td> 2006 </td><td> 113 </td><td> 136 </td></tr>
                                <tr><td> 2005 </td><td> 98 </td><td> 125 </td></tr>
                                <tr><td> 2004 </td><td> 104 </td><td> 132 </td></tr>
                                <tr><td> 2003 </td><td> 99 </td><td> 130 </td></tr>
                                <tr><td> 2002 </td><td> 101 </td><td> 132 </td></tr>
                                <tr><td> 2001 </td><td> 83 </td><td> 122 </td></tr>
                                <tr><td> 2000 </td><td> No data </td><td> No data </td></tr>
                                <tr><td> 1999 </td><td> No data </td><td> No data </td></tr>
                                <tr><td> 1998 </td><td> No data </td><td> No data </td></tr>
                                <tr><td> 1997 </td><td> No data </td><td> No data </td></tr>
                            </tbody>
                        </table>

                        <span><i className="bi bi-thermometer-snow"></i>February: </span>
                        <a href='https://www.cemc.uwaterloo.ca/contests/ccc-cco.html'>CCC</a><br />

                        <span><i className="bi bi-thermometer-half"></i>March: </span>
                        <a href='https://mathkangaroo.ca/en'>Kangaroo</a> |
                        <a href='https://mathkangaroo.ca/samples/en'>Papers</a> <br />

                        <span><i className="bi bi-thermometer-half"></i>April: </span>
                        <a href='https://www.cemc.uwaterloo.ca/contests/fgh.html'>Fryer</a> |
                        <a href='https://www.cemc.uwaterloo.ca/contests/past_contests.html#fgh'>Papers</a> |
                        <button className='cutoffsButton'
                            onClick={() => {
                                let x = document.getElementById("FryerCutoff")
                                if (x.style.display === 'none') { x.style.display = 'block' } else { x.style.display = 'none' };
                            }}>Cutoffs</button><br />
                        <table id="FryerCutoff" className='cutoffsTable' style={{ display: 'none' }}>
                            <thead>
                                <tr><th> Year </th><th> Certificate <br /> (Top 25%) </th><th> Honour Roll <br /> (&asymp; Top 10%) </th></tr>
                            </thead>
                            <tbody>
                                <tr><td> 2022 </td><td> 25 </td><td> 30 </td></tr>
                                <tr><td> 2021 </td><td> 32 </td><td> 34 </td></tr>
                                <tr><td colSpan="3"> 2020: cancelled due to Covid </td></tr>
                                <tr><td> 2019 </td><td> 30 </td><td> 35 </td></tr>
                                <tr><td> 2018 </td><td> 29 </td><td> 33 </td></tr>
                                <tr><td> 2017 </td><td> 32 </td><td> 35 </td></tr>
                                <tr><td> 2016 </td><td> 30 </td><td> 35 </td></tr>
                                <tr><td> 2015 </td><td> 32 </td><td> 35 </td></tr>
                                <tr><td> 2014 </td><td> 28 </td><td> 33 </td></tr>
                                <tr><td colSpan="3">  Gold Standard before 2014  <br /> instead of Honour Roll </td></tr>
                                <tr><th> Year </th><th> Certificate <br /> (Top 25%) </th><th> Gold Standard <br /> (&asymp; Top 4%) </th></tr>
                                <tr><td> 2013 </td><td> 26 </td><td> 34 </td></tr>
                                <tr><td> 2012 </td><td> 31 </td><td> 36 </td></tr>
                                <tr><td> 2011 </td><td> 28 </td><td> 33 </td></tr>
                                <tr><td> 2010 </td><td> 28 </td><td> 35 </td></tr>
                                <tr><td> 2009 </td><td> 30 </td><td> 35 </td></tr>
                                <tr><td> 2008 </td><td> 30 </td><td> 36 </td></tr>
                                <tr><td> 2007 </td><td> 28 </td><td> 36 </td></tr>
                                <tr><td> 2006 </td><td> 32 </td><td> 36 </td></tr>
                                <tr><td> 2005 </td><td> 32 </td><td> 35 </td></tr>
                                <tr><td> 2004 </td><td> 31 </td><td> 36 </td></tr>
                                <tr><td> 2003 </td><td> 22 </td><td> 33 </td></tr>
                            </tbody>
                        </table>
                        <span><i className="bi bi-thermometer-sun"></i>June: </span>
                        End of G9
                    </h3>
                </div>

            </div>

            <button className="collapsible" id='ten' onClick={
                () => {
                    var me = document.getElementById('ten')
                    me.classList.toggle('cactive')
                    var content = me.nextElementSibling;
                    if (content.style.maxHeight) {
                        content.style.maxHeight = null;
                    } else {
                        content.style.maxHeight = "10000px";
                    }
                }
            }>Grade 10</button>
            <div className="contestContent">  {/* Grade 10 */}

                <div className='container'>
                    <h3>
                        <span><i className="bi bi-thermometer-half"></i>September: </span>
                        Start of G10<br />

                        <a href='https://cariboutests.com/'>Caribou (year-round)</a><br />

                        <span><i className="bi bi-thermometer-low"></i>November: </span>
                        <a href='https://www.cemc.uwaterloo.ca/contests/bcc.html'>BCC 9/10</a><br />

                        <span><i className="bi bi-thermometer-low"></i>November: </span>
                        <a href='https://www.maa.org/math-competitions/amc-1012'>AMC 10</a> |
                        <a href='https://artofproblemsolving.com/wiki/index.php/AMC_10_Problems_and_Solutions'>Papers</a>
                        <br />
                        <button className='cutoffsButton'
                            onClick={e => {
                                let theTable = e.target.nextElementSibling;
                                while (theTable.tagName !== 'TABLE') { theTable = theTable.nextElementSibling }
                                if (theTable.style.display === 'none') { theTable.style.display = 'block' } else { theTable.style.display = 'none' };
                            }}>Paper A Cutoffs</button>
                        {AMC10ACutoffTable} |
                        <button className='cutoffsButton'
                            onClick={e => {
                                let theTable = e.target.nextElementSibling;
                                while (theTable.tagName !== 'TABLE') { theTable = theTable.nextElementSibling }
                                if (theTable.style.display === 'none') { theTable.style.display = 'block' } else { theTable.style.display = 'none' };
                            }}>Paper B Cutoffs</button><br />
                        {AMC10BCutoffTable}

                        <span><i className="bi bi-thermometer-low"></i>November: </span>
                        <a href='https://www.cemc.uwaterloo.ca/contests/csimc.html'>CIMC</a> |
                        <a href='https://www.cemc.uwaterloo.ca/contests/past_contests.html#csimc'>Papers</a> |
                        <button className='cutoffsButton'
                            onClick={e => {
                                let theTable = e.target.nextElementSibling;
                                while (theTable.tagName !== 'TABLE') { theTable = theTable.nextElementSibling }
                                if (theTable.style.display === 'none') { theTable.style.display = 'block' } else { theTable.style.display = 'none' };
                            }}>Cutoffs</button><br />
                        {CIMCCutoffTable}

                        <span><i className="bi bi-thermometer-snow"></i>January: </span>
                        New Year<br />

                        <span><i className="bi bi-thermometer-snow"></i>February: </span>
                        <a href='https://www.cemc.uwaterloo.ca/contests/pcf.html'>Cayley</a> |
                        <a href='https://www.cemc.uwaterloo.ca/contests/past_contests.html#pcf'>Papers</a> |
                        <button className='cutoffsButton'
                            onClick={() => {
                                let x = document.getElementById("CayleyCutoff")
                                if (x.style.display === 'none') { x.style.display = 'block' } else { x.style.display = 'none' };
                            }}>Cutoffs</button><br />
                        <table id="CayleyCutoff" className='cutoffsTable' style={{ display: 'none' }}>
                            <thead>
                                <tr><th> Year </th><th> Certificate <br /> (Top 25%) </th><th> Honour Roll <br /> (&asymp; Top 1.5%) </th></tr>
                            </thead>
                            <tbody>
                                <tr><td> 2023 </td><td> 108 </td><td> 132 </td></tr>
                                <tr><td> 2022 </td><td> 105 </td><td> 128 </td></tr>
                                <tr><td> 2021 </td><td> 114 </td><td> 132 </td></tr>
                                <tr><td> 2020 </td><td> 114 </td><td> 134 </td></tr>
                                <tr><td> 2019 </td><td> 112 </td><td> 132 </td></tr>
                                <tr><td> 2018 </td><td> 106 </td><td> 128 </td></tr>
                                <tr><td> 2017 </td><td> 103 </td><td> 130 </td></tr>
                                <tr><td> 2016 </td><td> 106 </td><td> 128 </td></tr>
                                <tr><td> 2015 </td><td> 106 </td><td> 130 </td></tr>
                                <tr><td> 2014 </td><td> 114 </td><td> 134 </td></tr>
                                <tr><td> 2013 </td><td> 104 </td><td> 132 </td></tr>
                                <tr><td> 2012 </td><td> 102 </td><td> 132 </td></tr>
                                <tr><td> 2011 </td><td> 100 </td><td> 126 </td></tr>
                                <tr><td> 2010 </td><td> 104 </td><td> 132 </td></tr>
                                <tr><td> 2009 </td><td> 102 </td><td> 134 </td></tr>
                                <tr><td> 2008 </td><td> 102 </td><td> 130 </td></tr>
                                <tr><td> 2007 </td><td> 104 </td><td> 132 </td></tr>
                                <tr><td> 2006 </td><td> 110 </td><td> 132 </td></tr>
                                <tr><td> 2005 </td><td> 95 </td><td> 125 </td></tr>
                                <tr><td> 2004 </td><td> 108 </td><td> 132 </td></tr>
                                <tr><td> 2003 </td><td> 102 </td><td> 132 </td></tr>
                                <tr><td> 2002 </td><td> 103 </td><td> 132 </td></tr>
                                <tr><td> 2001 </td><td> 83 </td><td> 121 </td></tr>
                                <tr><td> 2000 </td><td> No data </td><td> No data </td></tr>
                                <tr><td> 1999 </td><td> No data </td><td> No data </td></tr>
                                <tr><td> 1998 </td><td> No data </td><td> No data </td></tr>
                                <tr><td> 1997 </td><td> No data </td><td> No data </td></tr>
                            </tbody>
                        </table>

                        <span><i className="bi bi-thermometer-snow"></i>February: </span>
                        <a href='https://www.cemc.uwaterloo.ca/contests/ccc-cco.html'>CCC</a><br />

                        <span><i className="bi bi-thermometer-half"></i>March: </span>
                        <a href='https://mathkangaroo.ca/en'>Kangaroo</a> |
                        <a href='https://mathkangaroo.ca/samples/en'>Papers</a> <br />

                        <span><i className="bi bi-thermometer-half"></i>April: </span>
                        <a href='https://www.cemc.uwaterloo.ca/contests/fgh.html'>Galois</a> |
                        <a href='https://www.cemc.uwaterloo.ca/contests/past_contests.html#fgh'>Papers</a> |
                        <button className='cutoffsButton'
                            onClick={() => {
                                let x = document.getElementById("GaloisCutoff")
                                if (x.style.display === 'none') { x.style.display = 'block' } else { x.style.display = 'none' };
                            }}>Cutoffs</button><br />
                        <table id="GaloisCutoff" className='cutoffsTable' style={{ display: 'none' }}>
                            <thead>
                                <tr><th> Year </th><th> Certificate <br /> (Top 25%) </th><th> Honour Roll <br /> (&asymp; Top 10%) </th></tr>
                            </thead>
                            <tbody>
                                <tr><td> 2022 </td><td> 26 </td><td> 30 </td></tr>
                                <tr><td> 2021 </td><td> 29 </td><td> 31 </td></tr>
                                <tr><td colSpan="3"> 2020: cancelled due to Covid </td></tr>
                                <tr><td> 2019 </td><td> 26 </td><td> 32 </td></tr>
                                <tr><td> 2018 </td><td> 25 </td><td> 29 </td></tr>
                                <tr><td> 2017 </td><td> 28 </td><td> 31 </td></tr>
                                <tr><td> 2016 </td><td> 29 </td><td> 32 </td></tr>
                                <tr><td> 2015 </td><td> 28 </td><td> 31 </td></tr>
                                <tr><td> 2014 </td><td> 28 </td><td> 30 </td></tr>
                                <tr><td colSpan="3">  Gold Standard before 2014  <br /> instead of Honour Roll </td></tr>
                                <tr><th> Year </th><th> Certificate <br /> (Top 25%) </th><th> Gold Standard <br /> (&asymp; Top 4%) </th></tr>
                                <tr><td> 2013 </td><td> 32 </td><td> 36 </td></tr>
                                <tr><td> 2012 </td><td> 29 </td><td> 33 </td></tr>
                                <tr><td> 2011 </td><td> 29 </td><td> 34 </td></tr>
                                <tr><td> 2010 </td><td> 30 </td><td> 37 </td></tr>
                                <tr><td> 2009 </td><td> 30 </td><td> 35 </td></tr>
                                <tr><td> 2008 </td><td> 28 </td><td> 34 </td></tr>
                                <tr><td> 2007 </td><td> 26 </td><td> 34 </td></tr>
                                <tr><td> 2006 </td><td> 28 </td><td> 34 </td></tr>
                                <tr><td> 2005 </td><td> 27 </td><td> 34 </td></tr>
                                <tr><td> 2004 </td><td> 30 </td><td> 34 </td></tr>
                                <tr><td> 2003 </td><td> 23 </td><td> 32 </td></tr>
                            </tbody>
                        </table>
                        <span><i className="bi bi-thermometer-sun"></i>June: </span>
                        End of G10
                    </h3>
                </div>
            </div>

            <button className="collapsible" id='eleven' onClick={
                () => {
                    var me = document.getElementById('eleven')
                    me.classList.toggle('cactive')
                    var content = me.nextElementSibling;
                    if (content.style.maxHeight) {
                        content.style.maxHeight = null;
                    } else {
                        content.style.maxHeight = "10000px";
                    }
                }
            }>Grade 11</button>
            <div className="contestContent">  {/* Grade 11 */}

                <div className='container'>
                    <h3>
                        <span><i className="bi bi-thermometer-half"></i>September: </span>
                        Start of G11<br />

                        <a href='https://cariboutests.com/'>Caribou (year-round)</a><br />

                        <span><i className="bi bi-thermometer-low"></i>October: </span>
                        <a href='https://cms.math.ca/competitions/comc/'>COMC</a> |
                        <a href='https://cms.math.ca/competitions/comc/comc2022/getting-ready/'>Papers</a> |
                        <button className='cutoffsButton'
                            onClick={e => {
                                let theTable = e.target.nextElementSibling;
                                while (theTable.tagName !== 'TABLE') { theTable = theTable.nextElementSibling }
                                if (theTable.style.display === 'none') { theTable.style.display = 'block' } else { theTable.style.display = 'none' };
                            }}>Cutoffs</button><br />
                        {COMCCutoffTable}

                        <span><i className="bi bi-thermometer-low"></i>November: </span>
                        <a href='https://www.maa.org/math-competitions/amc-1012'>AMC 12</a> |
                        <a href='https://artofproblemsolving.com/wiki/index.php/AMC_12_Problems_and_Solutions'>Papers</a> 
                        <br />
                        <button className='cutoffsButton'
                            onClick={e => {
                                let theTable = e.target.nextElementSibling;
                                while (theTable.tagName !== 'TABLE') { theTable = theTable.nextElementSibling }
                                if (theTable.style.display === 'none') { theTable.style.display = 'block' } else { theTable.style.display = 'none' };
                            }}>Paper A Cutoffs</button>
                        {AMC12ACutoffTable} |
                        <button className='cutoffsButton'
                            onClick={e => {
                                let theTable = e.target.nextElementSibling;
                                while (theTable.tagName !== 'TABLE') { theTable = theTable.nextElementSibling }
                                if (theTable.style.display === 'none') { theTable.style.display = 'block' } else { theTable.style.display = 'none' };
                            }}>Paper B Cutoffs</button><br />
                        {AMC12BCutoffTable}

                        <span><i className="bi bi-thermometer-low"></i>November: </span>
                        <a href='https://www.cemc.uwaterloo.ca/contests/csimc.html'>CSMC</a> |
                        <a href='https://www.cemc.uwaterloo.ca/contests/past_contests.html#csimc'>Papers</a> | 
                        <button className='cutoffsButton'
                            onClick={e => {
                                let theTable = e.target.nextElementSibling;
                                while (theTable.tagName !== 'TABLE') { theTable = theTable.nextElementSibling }
                                if (theTable.style.display === 'none') { theTable.style.display = 'block' } else { theTable.style.display = 'none' };
                            }}>Cutoffs</button><br />
                        {CSMCCutoffTable}

                        <span><i className="bi bi-thermometer-snow"></i>January: </span>
                        New Year<br />

                        <span><i className="bi bi-thermometer-snow"></i>February: </span>
                        <a href='https://www.cemc.uwaterloo.ca/contests/pcf.html'>Fermat</a> |
                        <a href='https://www.cemc.uwaterloo.ca/contests/past_contests.html#pcf'>Papers</a> |
                        <button className='cutoffsButton'
                            onClick={() => {
                                let x = document.getElementById("FermatCutoff")
                                if (x.style.display === 'none') { x.style.display = 'block' } else { x.style.display = 'none' };
                            }}>Cutoffs</button><br />
                        <table id="FermatCutoff" className='cutoffsTable' style={{ display: 'none' }}>
                            <thead>
                                <tr><th> Year </th><th> Certificate <br /> (Top 25%) </th><th> Honour Roll <br /> (&asymp; Top 1.5%) </th></tr>
                            </thead>
                            <tbody>
                                <tr><td> 2023 </td><td> 102 </td><td> 124 </td></tr>
                                <tr><td> 2022 </td><td> 100 </td><td> 126 </td></tr>
                                <tr><td> 2021 </td><td> 112 </td><td> 134 </td></tr>
                                <tr><td> 2020 </td><td> 106 </td><td> 130 </td></tr>
                                <tr><td> 2019 </td><td> 108 </td><td> 130 </td></tr>
                                <tr><td> 2018 </td><td> 101 </td><td> 126 </td></tr>
                                <tr><td> 2017 </td><td> 104 </td><td> 126 </td></tr>
                                <tr><td> 2016 </td><td> 106 </td><td> 128 </td></tr>
                                <tr><td> 2015 </td><td> 108 </td><td> 126 </td></tr>
                                <tr><td> 2014 </td><td> 104 </td><td> 126 </td></tr>
                                <tr><td> 2013 </td><td> 102 </td><td> 128 </td></tr>
                                <tr><td> 2012 </td><td> 101 </td><td> 126 </td></tr>
                                <tr><td> 2011 </td><td> 100 </td><td> 128 </td></tr>
                                <tr><td> 2010 </td><td> 103 </td><td> 130 </td></tr>
                                <tr><td> 2009 </td><td> 98 </td><td> 130 </td></tr>
                                <tr><td> 2008 </td><td> 99 </td><td> 126 </td></tr>
                                <tr><td> 2007 </td><td> 101 </td><td> 130 </td></tr>
                                <tr><td> 2006 </td><td> 104 </td><td> 128 </td></tr>
                                <tr><td> 2005 </td><td> 104 </td><td> 126 </td></tr>
                                <tr><td> 2004 </td><td> 96 </td><td> 128 </td></tr>
                                <tr><td> 2003 </td><td> 100 </td><td> 126 </td></tr>
                                <tr><td> 2002 </td><td> 104 </td><td> 134 </td></tr>
                                <tr><td> 2001 </td><td> 81 </td><td> 118 </td></tr>
                                <tr><td> 2000 </td><td> No data </td><td> No data </td></tr>
                                <tr><td> 1999 </td><td> No data </td><td> No data </td></tr>
                                <tr><td> 1998 </td><td> No data </td><td> No data </td></tr>
                                <tr><td> 1997 </td><td> No data </td><td> No data </td></tr>
                            </tbody>
                        </table>

                        <span><i className="bi bi-thermometer-snow"></i>February: </span>
                        <a href='https://www.cemc.uwaterloo.ca/contests/ccc-cco.html'>CCC</a><br />

                        <span><i className="bi bi-thermometer-half"></i>March: </span>
                        <a href='https://mathkangaroo.ca/en'>Kangaroo</a> |
                        <a href='https://mathkangaroo.ca/samples/en'>Papers</a> <br />

                        <span><i className="bi bi-thermometer-half"></i>April: </span>
                        <a href='https://www.cemc.uwaterloo.ca/contests/euclid.html'>Euclid</a> |
                        <a href='https://www.cemc.uwaterloo.ca/contests/past_contests.html#euclid'>Papers</a> | 
                        <button className='cutoffsButton'
                            onClick={e => {
                                let theTable = e.target.nextElementSibling;
                                while (theTable.tagName !== 'TABLE') { theTable = theTable.nextElementSibling }
                                if (theTable.style.display === 'none') { theTable.style.display = 'block' } else { theTable.style.display = 'none' };
                            }}>Cutoffs</button><br />
                        {euclidCutoffTable}

                        <span><i className="bi bi-thermometer-half"></i>April: </span>
                        <a href='https://www.cemc.uwaterloo.ca/contests/fgh.html'>Hypatia</a> |
                        <a href='https://www.cemc.uwaterloo.ca/contests/past_contests.html#fgh'>Papers</a> |
                        <button className='cutoffsButton'
                            onClick={() => {
                                let x = document.getElementById("HypatiaCutoff")
                                if (x.style.display === 'none') { x.style.display = 'block' } else { x.style.display = 'none' };
                            }}>Cutoffs</button><br />
                        <table id="HypatiaCutoff" className='cutoffsTable' style={{ display: 'none' }}>
                            <thead>
                                <tr><th> Year </th><th> Certificate <br /> (Top 25%) </th><th> Honour Roll <br /> (&asymp; Top 10%) </th></tr>
                            </thead>
                            <tbody>
                                <tr><td> 2022 </td><td> 30 </td><td> 33 </td></tr>
                                <tr><td> 2021 </td><td> 30 </td><td> 33 </td></tr>
                                <tr><td colSpan="3"> 2020: cancelled due to Covid </td></tr>
                                <tr><td> 2019 </td><td> 32 </td><td> 34 </td></tr>
                                <tr><td> 2018 </td><td> 28 </td><td> 32 </td></tr>
                                <tr><td> 2017 </td><td> 26 </td><td> 29 </td></tr>
                                <tr><td> 2016 </td><td> 30 </td><td> 33 </td></tr>
                                <tr><td> 2015 </td><td> 27 </td><td> 32 </td></tr>
                                <tr><td> 2014 </td><td> 30 </td><td> 31 </td></tr>
                                <tr><td colSpan="3">  Gold Standard before 2014  <br /> instead of Honour Roll </td></tr>
                                <tr><th> Year </th><th> Certificate <br /> (Top 25%) </th><th> Gold Standard <br /> (&asymp; Top 4%) </th></tr>
                                <tr><td> 2013 </td><td> 27 </td><td> 34 </td></tr>
                                <tr><td> 2012 </td><td> 26 </td><td> 32 </td></tr>
                                <tr><td> 2011 </td><td> 29 </td><td> 34 </td></tr>
                                <tr><td> 2010 </td><td> 31 </td><td> 38 </td></tr>
                                <tr><td> 2009 </td><td> 28 </td><td> 36 </td></tr>
                                <tr><td> 2008 </td><td> 33 </td><td> 38 </td></tr>
                                <tr><td> 2007 </td><td> 24 </td><td> 31 </td></tr>
                                <tr><td> 2006 </td><td> 26 </td><td> 34 </td></tr>
                                <tr><td> 2005 </td><td> 31 </td><td> 35 </td></tr>
                                <tr><td> 2004 </td><td> 29 </td><td> 34 </td></tr>
                                <tr><td> 2003 </td><td> 19 </td><td> 32 </td></tr>
                            </tbody>
                        </table>
                        <span><i className="bi bi-thermometer-sun"></i>June: </span>
                        End of G11
                    </h3>
                </div>
            </div>

            <button className="collapsible" id='twelve' onClick={
                () => {
                    var me = document.getElementById('twelve')
                    me.classList.toggle('cactive')
                    var content = me.nextElementSibling;
                    if (content.style.maxHeight) {
                        content.style.maxHeight = null;
                    } else {
                        content.style.maxHeight = "10000px";
                    }
                }
            }>Grade 12</button>
            <div className="contestContent"> {/* Grade 12 */}

                <div className='container'>
                    <h3>
                        <span><i className="bi bi-thermometer-half"></i>September: </span>
                        Start of G12<br />

                        <a href='https://cariboutests.com/'>Caribou (year-round)</a><br />

                        <span><i className="bi bi-thermometer-low"></i>October: </span>
                        <a href='https://cms.math.ca/competitions/comc/'>COMC</a> |
                        <a href='https://cms.math.ca/competitions/comc/comc2022/getting-ready/'>Papers</a> |
                        <button className='cutoffsButton'
                            onClick={e => {
                                let theTable = e.target.nextElementSibling;
                                while (theTable.tagName !== 'TABLE') { theTable = theTable.nextElementSibling }
                                if (theTable.style.display === 'none') { theTable.style.display = 'block' } else { theTable.style.display = 'none' };
                            }}>Cutoffs</button><br />
                        {COMCCutoffTable}

                        <span><i className="bi bi-thermometer-low"></i>November: </span>
                        <a href='https://www.maa.org/math-competitions/amc-1012'>AMC 12</a> |
                        <a href='https://artofproblemsolving.com/wiki/index.php/AMC_12_Problems_and_Solutions'>Papers</a> 
                        <br />
                        <button className='cutoffsButton'
                            onClick={e => {
                                let theTable = e.target.nextElementSibling;
                                while (theTable.tagName !== 'TABLE') { theTable = theTable.nextElementSibling }
                                if (theTable.style.display === 'none') { theTable.style.display = 'block' } else { theTable.style.display = 'none' };
                            }}>Paper A Cutoffs</button>
                        {AMC12ACutoffTable} |
                        <button className='cutoffsButton'
                            onClick={e => {
                                let theTable = e.target.nextElementSibling;
                                while (theTable.tagName !== 'TABLE') { theTable = theTable.nextElementSibling }
                                if (theTable.style.display === 'none') { theTable.style.display = 'block' } else { theTable.style.display = 'none' };
                            }}>Paper B Cutoffs</button><br />
                        {AMC12BCutoffTable}

                        <span><i className="bi bi-thermometer-low"></i>November: </span>
                        <a href='https://www.cemc.uwaterloo.ca/contests/csimc.html'>CSMC</a> |
                        <a href='https://www.cemc.uwaterloo.ca/contests/past_contests.html#csimc'>Papers</a> |
                        <button className='cutoffsButton'
                            onClick={e => {
                                let theTable = e.target.nextElementSibling;
                                while (theTable.tagName !== 'TABLE') { theTable = theTable.nextElementSibling }
                                if (theTable.style.display === 'none') { theTable.style.display = 'block' } else { theTable.style.display = 'none' };
                            }}>Cutoffs</button><br />
                        {CSMCCutoffTable}

                        <span><i className="bi bi-thermometer-snow"></i>January: </span>
                        New Year<br />

                        <span><i className="bi bi-thermometer-snow"></i>February: </span>
                        <a href='https://www.cemc.uwaterloo.ca/contests/ccc-cco.html'>CCC</a><br />

                        <span><i className="bi bi-thermometer-half"></i>March: </span>
                        <a href='https://mathkangaroo.ca/en'>Kangaroo</a> |
                        <a href='https://mathkangaroo.ca/samples/en'>Papers</a> <br />

                        <span><i className="bi bi-thermometer-half"></i>April: </span>
                        <a href='https://www.cemc.uwaterloo.ca/contests/euclid.html'>Euclid</a> |
                        <a href='https://www.cemc.uwaterloo.ca/contests/past_contests.html#euclid'>Papers</a> |
                        <button className='cutoffsButton'
                            onClick={e => {
                                let theTable = e.target.nextElementSibling;
                                while (theTable.tagName !== 'TABLE') { theTable = theTable.nextElementSibling }
                                if (theTable.style.display === 'none') { theTable.style.display = 'block' } else { theTable.style.display = 'none' };
                            }}>Cutoffs</button><br />
                        {euclidCutoffTable}

                        <span><i className="bi bi-thermometer-sun"></i>June: </span>
                        End of G12
                    </h3>
                </div>
            </div>

        </>
    );
}

export default Contests;
