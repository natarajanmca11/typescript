///<reference path='References.ts' />

enum SyntaxKind {
    None,

    // Trivia
    WhitespaceTrivia,
    NewLineTrivia,
    MultiLineCommentTrivia,
    SingleLineCommentTrivia,

    // Tokens
    IdentifierNameToken,

    // LiteralTokens
    RegularExpressionLiteral,
    NumericLiteral,
    StringLiteral,

    // Keywords
    BreakKeyword,
    CaseKeyword,
    CatchKeyword,
    ContinueKeyword,
    DebuggerKeyword,
    DefaultKeyword,
    DeleteKeyword,
    DoKeyword,
    ElseKeyword,
    FalseKeyword,
    FinallyKeyword,
    ForKeyword,
    FunctionKeyword,
    IfKeyword,
    InKeyword,
    InstanceOfKeyword,
    NewKeyword,
    NullKeyword,
    ReturnKeyword,
    SwitchKeyword,
    ThisKeyword,
    ThrowKeyword,
    TrueKeyword,
    TryKeyword,
    TypeOfKeyword,
    VarKeyword,
    VoidKeyword,
    WhileKeyword,
    WithKeyword,

    // FutureReservedWords.
    ClassKeyword,
    ConstKeyword,
    EnumKeyword,
    ExportKeyword,
    ExtendsKeyword,
    ImportKeyword,
    SuperKeyword,

    // FutureReservedStrictWords.
    ImplementsKeyword,
    InterfaceKeyword,
    LetKeyword,
    PackageKeyword,
    PrivateKeyword,
    ProtectedKeyword,
    PublicKeyword,
    StaticKeyword,
    YieldKeyword,

    // TypeScript keywords.
    ModuleKeyword,
    AnyKeyword,
    BoolKeyword,
    NumberKeyword,
    StringKeyword,

    // Punctuators
    OpenBraceToken,
    CloseBraceToken,
    OpenParenToken,
    CloseParenToken,
    OpenBracketToken,
    CloseBracketToken,
    DotToken,
    DotDotDotToken,
    SemicolonToken,
    CommaToken,
    LessThanToken,
    GreaterThanToken,
    LessThanEqualsToken,
    GreaterThanEqualsToken,
    EqualsEqualsToken,
    EqualsGreaterThanToken,
    ExclamationEqualsToken,
    EqualsEqualsEqualsToken,
    ExclamationEqualsEqualsToken,
    PlusToken,
    MinusToken,
    AsteriskToken,
    PercentToken,
    PlusPlusToken,
    MinusMinusToken,
    LessThanLessThanToken,
    GreaterThanGreaterThanToken,
    GreaterThanGreaterThanGreaterThanToken,
    AmpersandToken,
    BarToken,
    CaretToken,
    ExclamationToken,
    TildeToken,
    AmpersandAmpersandToken,
    BarBarToken,
    QuestionToken,
    ColonToken,
    EqualsToken,
    PlusEqualsToken,
    MinusEqualsToken,
    AsteriskEqualsToken,
    PercentEqualsToken,
    LessThanLessThanEqualsToken,
    GreaterThanGreaterThanEqualsToken,
    GreaterThanGreaterThanGreaterThanEqualsToken,
    AmpersandEqualsToken,
    BarEqualsToken,
    CaretEqualsToken,
    SlashToken,
    SlashEqualsToken,

    ErrorToken,
    EndOfFileToken,

    // SyntaxNodes
    SourceUnit,

    // Names
    IdentifierName,
    QualifiedName,

    // Statements
    Block,
    IfStatement,

    // Expressions
    PlusExpression,
    NegateExpression,
    BitwiseNotExpression,
    LogicalNotExpression,
    PreIncrementExpression,
    PreDecrementExpression,
    DeleteExpression,
    TypeOfExpression,
    VoidExpression,
    BooleanLiteralExpression,
    NullLiteralExpression,
    NumericLiteralExpression,
    RegularExpressionLiteralExpression,
    StringLiteralExpression,
    CommaExpression,
    AssignmentExpression,
    AddAssignmentExpression,
    SubtractAssignmentExpression,
    MultiplyAssignmentExpression,
    DivideAssignmentExpression,
    ModuloAssignmentExpression,
    AndAssignmentExpression,
    ExclusiveOrAssignmentExpression,
    OrAssignmentExpression,
    LeftShiftAssignmentExpression,
    SignedRightShiftAssignmentExpression,
    UnsignedRightShiftAssignmentExpression,
    ConditionalExpression,
    LogicalOrExpression,
    LogicalAndExpression,
    BitwiseOrExpression,
    BitwiseExclusiveOrExpression,
    BitwiseAndExpression,
    EqualsWithTypeConversionExpression,
    NotEqualsWithTypeConversionExpression,
    EqualsExpression,
    NotEqualsExpression,
    LessThanExpression,
    GreaterThanExpression,
    LessThanOrEqualExpression,
    GreaterThanOrEqualExpression,
    InstanceOfExpression,
    InExpression,
    LeftShiftExpression,
    SignedRightShiftExpression,
    UnsignedRightShiftExpression,
    MultiplyExpression,
    DivideExpression,
    ModuloExpression,
    AddExpression,
    SubtractExpression,
    PostIncrementExpression,
    PostDecrementExpression,

    VariableDeclaration,
    Parameter,
    FunctionSignature,

    FirstStandardKeyword = BreakKeyword,
    LastStandardKeyword = WithKeyword,

    FirstFutureReservedKeyword = ClassKeyword,
    LastFutureReservedKeyword = SuperKeyword,

    FirstFutureReservedStrictKeyword = ImplementsKeyword,
    LastFutureReservedStrictKeyword = YieldKeyword,

    FirstKeyword = FirstStandardKeyword,
    LastKeyword = LastFutureReservedStrictKeyword,

    FirstToken = IdentifierNameToken,
    LastToken = EndOfFileToken,

    FirstPunctuation = OpenBraceToken,
    LastPunctuation = SlashEqualsToken,
}