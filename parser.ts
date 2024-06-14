  
  import { Token, tokenize, TokenType } from "./lexer";
  
  export default class Parser {
    private tokens: Token[] = [];
  
    private not_eof(): boolean {
      return this.tokens[0].type != TokenType.EOF;
    }
  
    private at() {
      return this.tokens[0] as Token;
    }
  
    private eat() {
      const prev = this.tokens.shift() as Token;
      return prev;
    }
  
    private expect(type: TokenType, err: any) {
      const prev = this.tokens.shift() as Token;
      if (!prev || prev.type != type) {
        console.error("Parser Error:\n", err, prev, " - Expecting: ", type);
        Deno.exit(1);
      }
  
      return prev;
    }
    
    public produceAST(sourceCode: string): Program {
        this.tokens = tokenize(sourceCode);
        const program: Program = {
          kind: "Program",
          body: [],
        };
        
    }
    
}

