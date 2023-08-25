type MessageTypes = "error" | "res" | "notification";
type LanguageType = "fa" | "es" | "en" | "tr";
type Message = `${MessageTypes}_${LanguageType}`;

export type AllType = {
    toTranslate: Message;
};
