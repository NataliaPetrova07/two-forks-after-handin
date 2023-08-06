import DayDropDownList from "./DayDropDownList";

export function Monday({ bands, open, toggle, midgardData, jotunheimData, vanaheimData }) {

    //Days
    const midgardMon = midgardData?.mon
    const jotunheimMon = jotunheimData?.mon
    const vanaheimMon = vanaheimData?.mon

    return (
        <DayDropDownList
            bands={bands}
            open={open}
            toggle={toggle}
            day="MONDAY"
            bandDataM={midgardMon}
            bandDataJ={jotunheimMon}
            bandDataV={vanaheimMon}
        />
    );
}


export function Tuesday({ bands, open, toggle, midgardData, jotunheimData, vanaheimData }) {

    //Days
    const midgardTue = midgardData?.tue
    const jotunheimTue = jotunheimData?.tue
    const vanaheimTue = vanaheimData?.tue

    return (
        <DayDropDownList
            bands={bands}
            open={open}
            toggle={toggle}
            day="TUESDAY"
            bandDataM={midgardTue}
            bandDataJ={jotunheimTue}
            bandDataV={vanaheimTue}
        />
    );
}

export function Wednesday({ bands, open, toggle, midgardData, jotunheimData, vanaheimData }) {

    //Days
    const midgardWed = midgardData?.wed
    const jotunheimWed = jotunheimData?.wed
    const vanaheimWed = vanaheimData?.wed

    return (
        <DayDropDownList
            bands={bands}
            open={open}
            toggle={toggle}
            day="WEDNESDAY"
            bandDataM={midgardWed}
            bandDataJ={jotunheimWed}
            bandDataV={vanaheimWed}
        />
    );
}

export function Thursday({ bands, open, toggle, midgardData, jotunheimData, vanaheimData }) {

    //Days
    const midgardThu = midgardData?.thu
    const jotunheimThu = jotunheimData?.thu
    const vanaheimThu = vanaheimData?.thu

    return (
        <DayDropDownList
            bands={bands}
            open={open}
            toggle={toggle}
            day="THURSDAY"
            bandDataM={midgardThu}
            bandDataJ={jotunheimThu}
            bandDataV={vanaheimThu}
        />
    );
}

export function Friday({ bands, open, toggle, midgardData, jotunheimData, vanaheimData }) {

    //Days
    const midgardFri = midgardData?.fri
    const jotunheimFri = jotunheimData?.fri
    const vanaheimFri = vanaheimData?.fri

    return (
        <DayDropDownList
            bands={bands}
            open={open}
            toggle={toggle}
            day="FRIDAY"
            bandDataM={midgardFri}
            bandDataJ={jotunheimFri}
            bandDataV={vanaheimFri}
        />
    );
}

export function Saturday({ bands, open, toggle, midgardData, jotunheimData, vanaheimData }) {

    //Days
    const midgardSat = midgardData?.sat
    const jotunheimSat = jotunheimData?.sat
    const vanaheimSat = vanaheimData?.sat

    return (
        <DayDropDownList
            bands={bands}
            open={open}
            toggle={toggle}
            day="SATURDAY"
            bandDataM={midgardSat}
            bandDataJ={jotunheimSat}
            bandDataV={vanaheimSat}
        />
    );
}

export function Sunday({ bands, open, toggle, midgardData, jotunheimData, vanaheimData }) {

    //Days
    const midgardSun = midgardData?.sun
    const jotunheimSun = jotunheimData?.sun
    const vanaheimSun = vanaheimData?.sun

    return (
        <DayDropDownList
            bands={bands}
            open={open}
            toggle={toggle}
            day="SUNDAY"
            bandDataM={midgardSun}
            bandDataJ={jotunheimSun}
            bandDataV={vanaheimSun}
        />
    );
}