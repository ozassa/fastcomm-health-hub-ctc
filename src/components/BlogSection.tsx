import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogArticles, blogCategories, blogSectionContent, BlogArticle } from "@/constants/blog";
import { CalendarDays, Clock, User, ChevronRight, Filter } from "lucide-react";
import { cn } from "@/lib/utils";

const BlogSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);

  const filteredArticles = selectedCategory === "all" 
    ? blogArticles 
    : blogArticles.filter(article => article.category === selectedCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  if (selectedArticle) {
    return (
      <section id="recursos" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            onClick={() => setSelectedArticle(null)}
            className="mb-6 hover:bg-white/80"
          >
            ← Voltar aos Recursos
          </Button>
          
          <article className="max-w-4xl mx-auto">
            <header className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  {blogCategories.find(cat => cat.id === selectedArticle.category)?.name}
                </Badge>
                <Badge variant="outline">{selectedArticle.readingTime}</Badge>
              </div>
              
              <h1 className="text-4xl font-bold text-slate-900 mb-4 leading-tight">
                {selectedArticle.title}
              </h1>
              
              <div className="flex items-center gap-6 text-slate-600 mb-6">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span className="text-sm">{selectedArticle.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  <span className="text-sm">{formatDate(selectedArticle.publishedAt)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">{selectedArticle.readingTime}</span>
                </div>
              </div>
              
              <p className="text-xl text-slate-700 leading-relaxed">
                {selectedArticle.excerpt}
              </p>
            </header>
            
            <div className="bg-white rounded-xl shadow-sm border p-8">
              <div 
                className="prose prose-lg prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-blue-600 prose-code:text-blue-800 prose-code:bg-blue-50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded"
                dangerouslySetInnerHTML={{ __html: selectedArticle.content.replace(/\n/g, '<br/>') }}
              />
            </div>
            
            <footer className="mt-8 p-6 bg-blue-50 rounded-xl">
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedArticle.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-white/80">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-slate-900">Gostou deste conteúdo?</p>
                  <p className="text-sm text-slate-600">Fale com nossos especialistas em interoperabilidade</p>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Falar com Especialista
                </Button>
              </div>
            </footer>
          </article>
        </div>
      </section>
    );
  }

  return (
    <section id="recursos" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {blogSectionContent.title}{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {blogSectionContent.titleHighlight}
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {blogSectionContent.description}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Button
            variant={selectedCategory === "all" ? "default" : "outline"}
            onClick={() => setSelectedCategory("all")}
            className={cn(
              "transition-all",
              selectedCategory === "all" 
                ? "bg-blue-600 hover:bg-blue-700" 
                : "hover:bg-blue-50 hover:text-blue-600"
            )}
          >
            <Filter className="h-4 w-4 mr-2" />
            Todos os Artigos
          </Button>
          {blogCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={cn(
                  "transition-all",
                  selectedCategory === category.id 
                    ? "bg-blue-600 hover:bg-blue-700" 
                    : "hover:bg-blue-50 hover:text-blue-600"
                )}
              >
                <IconComponent className="h-4 w-4 mr-2" />
                {category.name}
              </Button>
            );
          })}
        </div>

        {/* Featured Article */}
        {selectedCategory === "all" && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              Artigo em Destaque
            </h3>
            <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0 overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                  onClick={() => setSelectedArticle(blogSectionContent.featured)}>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 mb-4">
                  <Badge className="bg-white/20 text-white border-white/30">
                    DESTAQUE
                  </Badge>
                  <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
                    {blogSectionContent.featured.readingTime}
                  </Badge>
                </div>
                <CardTitle className="text-2xl mb-3 group-hover:text-blue-100 transition-colors">
                  {blogSectionContent.featured.title}
                </CardTitle>
                <CardDescription className="text-blue-100 text-base leading-relaxed">
                  {blogSectionContent.featured.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <div className="flex items-center gap-4 text-blue-100">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span className="text-sm">{blogSectionContent.featured.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" />
                    <span className="text-sm">{formatDate(blogSectionContent.featured.publishedAt)}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-white/30 group-hover:bg-white/30">
                  Ler Artigo Completo
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredArticles.map((article) => {
            const IconComponent = article.icon;
            return (
              <Card key={article.id} 
                    className="bg-white/80 backdrop-blur-sm border-slate-200 hover:shadow-xl hover:bg-white transition-all duration-300 cursor-pointer group h-full"
                    onClick={() => setSelectedArticle(article)}>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                      <IconComponent className="h-4 w-4 text-blue-600" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {blogCategories.find(cat => cat.id === article.category)?.name}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-4 flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs bg-slate-100">
                        {tag}
                      </Badge>
                    ))}
                    {article.tags.length > 3 && (
                      <Badge variant="secondary" className="text-xs bg-slate-100">
                        +{article.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center pt-4 border-t">
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <div className="flex items-center gap-1">
                      <CalendarDays className="h-3 w-3" />
                      <span>{formatDate(article.publishedAt)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{article.readingTime}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-2">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            {blogSectionContent.cta.title}
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {blogSectionContent.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 hover:text-blue-700">
              {blogSectionContent.cta.buttons.primary}
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              {blogSectionContent.cta.buttons.secondary}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;