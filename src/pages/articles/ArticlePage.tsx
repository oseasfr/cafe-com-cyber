        {/* Conteúdo do Artigo com Tema Isolado */}
        <ArticleContent article={article} theme={articleTheme.theme} />

        {/* Biografia do Autor no final */}
        <AuthorBioFooter
          author={article.author}
          authorFirstName={article.authorFirstName}
          authorLastName={article.authorLastName}
          authorAvatar={article.authorAvatar}
          authorBio={article.authorBio}
          authorSocialLink={article.authorSocialLink}
          authorSocialType={article.authorSocialType}
        />

        {/* Botões de Compartilhamento e Tema - Abaixo da Bio */}
        <div className="mt-8">
          <ShareButtons
            title={article.title}
            url={articleUrl}
            description={article.description}
            themeToggle={<ArticleThemeToggle theme={articleTheme.theme} onToggle={articleTheme.toggleTheme} />}
          />
        </div>

        {/* Botão Voltar no Final */}
