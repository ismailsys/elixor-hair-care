import { useState } from "react";

const ingredients = ["Eau distillée de jujubier (Sidr Water)", "Glycérine", "Extrait de graines de cresson", "Extrait de Ginseng rouge", "Extrait de champignon Reishi", "Phénoxyéthanol & Éthylhexylglycérine", "Capsaïcine"];
const steps = ["Lavez et séchez légèrement vos cheveux avec une serviette.", "Agitez le spray avant utilisation.", "Vaporisez directement sur le cuir chevelu, en ciblant les zones concernées.", "Massez doucement le cuir chevelu.", "Ne rincez pas. Coiffez comme d’habitude ou laissez sécher à l’air."];

function Bottle() {
  return <div className="bottle-wrap official-bottle"><div className="halo"/><img src="data:image/webp;base64,UklGRpJpAABXRUJQVlA4IIZpAABwJAKdASroA+gDPmEwlEgkIq..." alt="ÉLIXOR Hair Care Spray, flacon officiel 100 ml" /></div>;
}

export default function App() {
 const [form,setForm] = useState({name:"",phone:"",city:""});
 const [submitted,setSubmitted] = useState(false);
 return <main>
  <header><a className="wordmark" href="#home">ÉLIXOR</a><a className="nav-cta" href="#order">COMMANDER</a></header>
  <section className="hero" id="home"><div className="hero-inner"><div className="intro"><p className="eyebrow">BOTANICAL HAIR CARE · 100 ML</p><h1>Le soin capillaire,<br/><em>dans un nouveau geste.</em></h1><p className="lead">Une formule en spray enrichie en extraits botaniques, à intégrer simplement à votre routine du cuir chevelu.</p><a className="primary" href="#order">DÉCOUVRIR LE SPRAY <span>↗</span></a><div className="hero-note">UNE ROUTINE SIMPLE <b>·</b> EXTRAITS BOTANIQUES <b>·</b> 100 ML</div></div><Bottle/></div><div className="hero-bottom">ÉLIXOR <span>HAIR CARE ESSENTIALS</span></div></section>
  <section className="section story"><div><p className="eyebrow dark">L’UNIVERS ÉLIXOR</p><h2>La beauté du geste.<br/><em>La force des extraits.</em></h2></div><div className="story-copy"><p>ÉLIXOR Hair Care Spray associe plusieurs ingrédients présents sur l’étiquette du produit, dans un format pratique de 100 ml.</p><p>Un rituel capillaire sans rinçage, conçu pour accompagner vos gestes de soin au quotidien.</p></div></section>
  <section className="ingredients"><div className="section"><div><p className="eyebrow dark">LA FORMULE</p><h2>Les ingrédients<br/><em>sélectionnés.</em></h2></div><div className="ingredient-grid">{ingredients.map((x,i)=><article key={x}><small>0{i+1}</small><h3>{x}</h3></article>)}</div></div></section>
  <section className="section ritual"><div><p className="eyebrow dark">VOTRE RITUEL</p><h2>Quelques gestes,<br/><em>simplement.</em></h2><p className="muted">Suivez les indications d’utilisation figurant sur l’étiquette du produit.</p></div><div className="steps">{steps.map((x,i)=><div className="step" key={x}><span>0{i+1}</span><p>{x}</p></div>)}</div></section>
  <section className="order" id="order"><div className="order-inner"><div><p className="eyebrow">ÉLIXOR · 100 ML</p><h2>Votre nouveau<br/><em>rituel capillaire.</em></h2><p className="order-copy">Laissez vos coordonnées pour être contacté au sujet du produit.</p><p className="delivery">✦　Livraison au Maroc · Modalités à confirmer</p></div><form onSubmit={e=>{e.preventDefault();setSubmitted(true)}}>{submitted?<div className="success"><span>✓</span><h3>Merci !</h3><p>Le formulaire est en mode aperçu. Aucune commande n’a été envoyée.</p></div>:<><p className="form-title">Être contacté</p><label>Nom complet<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Votre nom"/></label><label>Téléphone<input required type="tel" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="06XXXXXXXX"/></label><label>Ville<input required value={form.city} onChange={e=>setForm({...form,city:e.target.value})} placeholder="Votre ville"/></label><button className="submit">ENVOYER MES COORDONNÉES ↗</button><small className="disclaimer">Formulaire de prévisualisation — connexion du système de commandes à venir.</small></>}</form></div></section>
  <footer><a className="wordmark" href="#home">ÉLIXOR</a><span>HAIR CARE SPRAY · 100 ML</span><span>© ÉLIXOR</span></footer>
 </main>;
}