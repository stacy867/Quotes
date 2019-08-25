export class quote {
  showDescription: boolean;

  public upvote: number;
  public downvote: number;
  constructor(
    public author: string,
    public citation: string,
    public person: string
  ) {
    this.showDescription = false;
    this.upvote = 0;
    this.downvote = 0;
  }
}
