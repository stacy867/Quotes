export class quote {
  showDescription: boolean;

  public upvotes: number;
  public downvote: number;
  constructor(
    public author: string,
    public citation: string,
    public person: string
  ) {
    this.showDescription = false;
    this.upvotes = 0;
    this.downvote = 0;
  }
}
