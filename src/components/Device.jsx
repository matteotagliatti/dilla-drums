import { useState } from "react";
import { Howl } from "howler";
import Sticker from "./Sticker";
import Switch from "./Switch";
import { HipHop, CasioPT30, RealDrums, TrapDrums } from "./Sounds";
import Button from "./Button";
import Screen from "./Screen";

export default function Device({ onMobile }) {
  const [active, setActive] = useState(null);
  const [activeSounds, setActiveSounds] = useState(HipHop);

  const sounds = [
    { name: "Beat", sounds: HipHop, keypress: "1" },
    { name: "Casio", sounds: CasioPT30, keypress: "2" },
    { name: "Real", sounds: RealDrums, keypress: "3" },
    { name: "Trap", sounds: TrapDrums, keypress: "4" },
  ];

  function click(sounds) {
    const sound = new Howl({
      src: [`/audio/click.mp3`],
      html5: true,
    });
    sound.play();
    setActiveSounds(sounds);
  }

  function playSound(source) {
    const sound = new Howl({
      src: [`/audio/${source.src}`],
      html5: true,
    });

    setActive(source);
    sound.play();
    setTimeout(() => {
      setActive(null);
    }, 300);
  }

  return (
    <div className="flex flex-col border-4 border-slate-300 rounded-lg bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 shadow-lg">
      <div className="w-full pt-5 p-3 bg-slate-100 border-2 border-slate-200 rounded-md z-10">
        <div className="grid grid-cols-4 w-full gap-2">
          <div className="w-full py-2 col-span-4 flex justify-center">
            <Sticker />
          </div>
          <Screen active={active} />
          <div className="col-span-4 px-2 pt-2 pb-0 bg-slate-600 rounded-md grid grid-cols-2 md:grid-cols-4 gap-y-1 gap-x-2 md:gap-2">
            {sounds.map((item, i) => (
              <Switch
                itemName={item.name}
                key={i}
                keyPress={item.keypress}
                play={() => click(item.sounds)}
                active={activeSounds == item.sounds}
              />
            ))}
          </div>
          {activeSounds.map((sound, i) => (
            <Button
              key={i}
              keyPress={sound.key}
              play={() => playSound(sound)}
              onMobile={onMobile}
            />
          ))}
        </div>
      </div>
      <div className="h-10 bg-transparent rounded-b-lg transform -translate-y-2 bg-gradient-to-t from-transparent to-black opacity-5" />
    </div>
  );
}
