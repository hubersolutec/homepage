import { useRef, useState } from 'react';

export type ExplorerScreen = {
  label: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

type Props = { screens: ExplorerScreen[]; product: string; note?: string };

export default function ScreenExplorer({ screens, product, note }: Props) {
  const [active, setActive] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const screen = screens[active];
  if (!screen) return null;
  const id = product.replace(/\W/g, '');
  return <>
    <div className="screen-explorer">
      <div className="screen-explorer-options" role="tablist" aria-label={product + ' 화면 선택'}>
        {screens.map((item, index) => <button key={item.title} type="button" id={id + '-tab-' + index} role="tab" aria-selected={active === index} aria-controls="selected-product-screen" onClick={() => setActive(index)} className={'screen-explorer-option ' + (active === index ? 'is-active' : '')}>
          <span className="screen-explorer-number">{String(index + 1).padStart(2, '0')} · {item.label}</span>
          <strong>{item.title}</strong><span>{item.description}</span>
        </button>)}
      </div>
      <figure id="selected-product-screen" role="tabpanel" aria-labelledby={id + '-tab-' + active} className="screen-explorer-figure">
        <div className="screen-explorer-chrome"><span className="screen-explorer-dots" aria-hidden="true"><i/><i/><i/></span><span>{product} / {screen.title}</span><button type="button" onClick={() => dialog.current?.showModal()} aria-label={screen.title + ' 화면 확대'}>확대 보기 ↗</button></div>
        <button type="button" className="screen-explorer-image-button" onClick={() => dialog.current?.showModal()} aria-label={screen.title + ' 전체 화면 보기'}><img key={screen.image} src={screen.image} alt={screen.alt} className="solution-screen-enter" loading="lazy" /></button>
        <figcaption><strong>{screen.title}</strong><span>{screen.description}</span>{note && <small>{note}</small>}</figcaption>
      </figure>
    </div>
    <dialog ref={dialog} className="screen-explorer-dialog" onClick={event => { if (event.target === dialog.current) dialog.current?.close(); }}><div className="screen-explorer-dialog-inner"><div><strong>{product} · {screen.title}</strong><button type="button" onClick={() => dialog.current?.close()} aria-label="확대 화면 닫기">닫기 ×</button></div><img src={screen.image} alt={screen.alt} /></div></dialog>
  </>;
}
