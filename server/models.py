from pydantic import BaseModel


class ExplainRequest(BaseModel):
    mode: str
    selected_text: str
    stream: bool = False


class WriteRequest(BaseModel):
    mode: str
    seed_text: str
    paragraphs: int = 3
    stream: bool = False


class WriteResponse(BaseModel):
    mode: str
    paragraphs: int
    content: str


class ExplainResponse(BaseModel):
    mode: str
    selected_text: str
    explanation: str


class ParaphraseRequest(BaseModel):
    mode: str
    seed_text: str
    stream: bool = False


class ParaphraseResponse(BaseModel):
    mode: str
    seed_text: str
    paraphrased: str


class CorrectGrammerRequest(BaseModel):
    text: str
    strictness: float = 0.5
    stream: bool = False


class CorrectGrammerResponse(BaseModel):
    text: str
    corrected: str


class PlaigiarismCheckRequest(BaseModel):
    text: str
    strictness: float = 0.5
    stream: bool = False


class PlaigiarismCheckResponse(BaseModel):
    text: str
    plaigarism_percent: float


class SummarizerRequest(BaseModel):
    text: str
    paragraph_count: int = 2
    stream: bool = False


class SummarizerResponse(BaseModel):
    summary: str


class AIDetectorRequest(BaseModel):
    text: str
    strictness: float = 0.5


class AIDetectorResponse(BaseModel):
    text: str
    detected: dict


class TranslatorRequest(BaseModel):
    text: str
    lang_code: str
    stream: bool = False


class TranslatorResponse(BaseModel):
    lang_code: str
    translated: str
